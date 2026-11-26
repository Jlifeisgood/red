const { chromium } = require('playwright');
const fs = require('fs');
const [,, file] = process.argv;
let html = fs.readFileSync(file, 'utf8');
const i = html.lastIndexOf('})();');
html = html.slice(0, i) + 'window.__T = { CASES, ENT, ENT_BY, BY, ledger, balOf, whyEntry, explainView, caseOptions, PLAIN, ACC, SUBS, money };\n' + html.slice(i);
const tmp = require('path').join(require('os').tmpdir(), 'nsbu21-validate.html'); fs.writeFileSync(tmp, html);
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const errs = []; p.on('pageerror', e => errs.push(String(e)));
  await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await p.goto('file://' + tmp); await p.waitForTimeout(500);
  const res = await p.evaluate(() => {
    const T = window.__T, out = [], warn = [];
    // every plain key points at a real account or family
    for (const k of Object.keys(T.PLAIN)) if (k.length === 4 ? !T.BY[k] : !T.ACC.some(a => a.code.startsWith(k))) out.push('PLAIN key unknown ' + k);
    let nEx = 0;
    for (const e of T.ENT) { try { const v = T.explainView(e); if (v) nEx++; } catch (err) { out.push('explain ' + e.id + ' ' + err); } }
    for (const c of T.CASES) {
      const open = (c.open || []).reduce((a, [, v]) => a + v, 0); if (open !== 0) out.push(c.id + ' opening not balanced ' + open);
      c.steps.forEach((st, n) => {
        const tag = `${c.id}#${n + 1}`;
        for (const code of [st.dt, st.kt]) if (!T.BY[code] || T.BY[code].isGroup) out.push(tag + ' bad code ' + code);
        if (!(st.s > 0)) out.push(tag + ' bad sum');
        if (st.ref) { const e = T.ENT_BY[st.ref]; if (!e) out.push(tag + ' missing ref ' + st.ref); else if (!e.dc.includes(st.dt) || !e.kc.includes(st.kt)) out.push(`${tag} ref ${st.ref} is ${e.dt}/${e.kt}, step ${st.dt}/${st.kt}`); }
        else warn.push(tag + ' no ref ' + st.dt + '/' + st.kt);
        if (!T.whyEntry({ dt: st.dt, kt: st.kt, dc: [st.dt], kc: [st.kt] })) out.push(tag + ' no why');
        for (let r = 0; r < 20; r++) { const o = T.caseOptions(st); if (o.length !== 4 || o.filter(x => x.ok).length !== 1) { out.push(tag + ' options ' + o.length); break; } }
        // running balances keep their natural side
        const B = T.ledger(c, n + 1);
        for (const [code, x] of Object.entries(B)) {
          const bal = T.balOf(x), t = T.BY[code].t;
          if (t === 'А' && bal < 0) out.push(`${tag} active ${code} went credit ${bal}`);
          if ((t === 'П' || t === 'КА') && bal > 0) out.push(`${tag} passive ${code} went debit ${bal}`);
        }
      });
      const B = T.ledger(c); let td = 0, tk = 0; const end = {};
      for (const [code, x] of Object.entries(B)) { const v = T.balOf(x); end[code] = v; if (v > 0) td += v; else tk -= v; }
      if (Math.round(td) !== Math.round(tk)) out.push(c.id + ' trial balance off');
      const api = { bal: k => T.balOf(B[k]), d: k => B[k] ? B[k].d : 0, k: k => B[k] ? B[k].k : 0 }, S = n => c.steps[n - 1].s;
      warn.push(c.id + ': ' + c.facts.map(([l, f]) => l + ' = ' + T.money(f(api, S))).join(' | '));
      warn.push(c.id + ' end: ' + Object.entries(end).filter(([, v]) => Math.round(v) !== 0).map(([k, v]) => k + ':' + v).join(' '));
    }
    return { out, warn, nEx, nEnt: T.ENT.length };
  });
  console.log('explained', res.nEx, 'of', res.nEnt);
  console.log('PROBLEMS:', res.out.length ? res.out : 'none');
  console.log(res.warn.join('\n'));
  console.log('page errors:', errs.length ? errs : 'none');
  await b.close();
})();
