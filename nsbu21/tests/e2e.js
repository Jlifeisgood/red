const { chromium } = require('playwright');
const [,, file, outdir] = process.argv;
const ok = (c, m) => { if (!c) { console.log('FAIL', m); process.exitCode = 1; } else console.log('ok  ', m); };
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 360, height: 780 } });
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await p.goto('file://' + file + '#cases'); await p.waitForTimeout(300);
  await p.click('.case >> nth=0'); await p.click('#next'); await p.waitForTimeout(150);
  ok(!!(await p.$('#slot-d')), 'self-placement is the default answer mode');
  await p.click('[data-k="am:choice"]'); await p.waitForTimeout(100);
  ok((await p.$$('.opt')).length === 4, 'one tap switches to four options');
  // answer every operation: the correct pair is read from the debit/credit codes printed after answering, so first pick option 1, then go on
  let steps = 0, right = 0;
  for (;;) {
    const meta = await p.$('.qmeta .num'); if (!meta) break;
    // choose the option that matches the step: try clicking each, but only one click allowed, so cheat with the hint in the DOM after answer
    await p.click('.opt >> nth=0'); steps++;
    if (await p.$('.fb.ok')) right++;
    ok(!!(await p.$('#why')), `operation ${steps}: breakdown shown`);
    await p.click('#next'); await p.waitForTimeout(60);
    if (steps > 40) break;
  }
  ok(steps === 35, 'ducts has 35 operations, answered ' + steps);
  const sum = await p.textContent('#main');
  ok(/Пример решён/.test(sum) && /Оборотно-сальдовая/.test(sum) && /66\s780/.test(sum), 'summary with facts and trial balance');
  ok(/по дебету ([\d\s]+) = по кредиту \1/.test(sum.replace(/ /g, ' ')), 'trial balance totals equal');
  await p.screenshot({ path: outdir + '/e2e_summary.png', fullPage: true });
  // a mistake link opens the read view at that operation
  const link = await p.$('.wlist button');
  if (link) { await link.click(); await p.waitForTimeout(200); ok(!!(await p.$('.step.hl')), 'mistake link highlights the operation'); }
  // Android back: read → intro → list → home
  const back = async () => p.evaluate(() => window.handleBack());
  ok(await back() && /Решать|Продолжить|Решить/.test(await p.textContent('#main')), 'back to intro');
  ok(await back() && !!(await p.$('.cases')), 'back to list');
  ok(await back() && /home/.test(await p.evaluate(() => location.hash)), 'back to home');
  // progress persisted
  const stored = await p.evaluate(() => JSON.parse(localStorage.getItem('nsbu21-trener:v1')).cases.ducts);
  ok(stored && stored.done && stored.best === right, `stored result ${stored && stored.best} = ${right}`);
  // input mode on another example
  // place the accounts yourself in another example (business trip: 4220/5010, 9420/4220, 1090/4220, 9420/1090)
  const pickBySearch = async (side, q) => { await p.click('#slot-' + side); await p.fill('.ov .search', q); await p.press('.ov .search', 'Enter'); await p.waitForTimeout(80); };
  await p.goto('file://' + file + '#cases'); await p.waitForTimeout(300);
  await p.click('.case:has-text("Командировка")'); await p.click('#next'); await p.waitForTimeout(150);
  await p.click('[data-k="am:input"]'); await p.waitForTimeout(100);
  ok(!!(await p.$('#slot-d')) && await p.$eval('#check', x => x.disabled), 'slots shown, «Проверить» waits for both accounts');
  await pickBySearch('d', '4220');
  await p.click('#slot-k'); await p.waitForTimeout(100);
  await p.screenshot({ path: outdir + '/e2e_picker.png' });
  await p.click('.ov .pk-row.grp:has-text("5000")'); await p.click('.ov .pk-row.pk-in:has-text("5010")'); await p.waitForTimeout(100);
  ok(/4220/.test(await p.textContent('#slot-d')) && /5010/.test(await p.textContent('#slot-k')), 'accounts placed by search and by browsing groups');
  await p.screenshot({ path: outdir + '/e2e_slots.png', fullPage: true });
  await p.click('#check'); await p.waitForTimeout(100);
  ok(!!(await p.$('.fb.ok')) && (await p.$$('.slot.ok')).length === 2, 'self-placed entry accepted');
  await p.click('#next');
  await pickBySearch('d', '4220'); await pickBySearch('k', '9420'); await p.click('#check');
  ok(/наоборот/.test(await p.textContent('#fb')), 'swapped accounts explained');
  await p.screenshot({ path: outdir + '/e2e_swapped.png', fullPage: true });
  await p.click('#next');
  await pickBySearch('d', '4220'); await pickBySearch('k', '1090'); await p.click('button:has-text("Поменять местами")');
  ok(/1090/.test(await p.textContent('#slot-d')) && /4220/.test(await p.textContent('#slot-k')), 'swap button exchanges debit and credit');
  await p.click('#check'); ok(!!(await p.$('.fb.ok')), 'swapped back entry accepted');
  await p.click('#next');
  await pickBySearch('d', '2510'); await pickBySearch('k', '1090'); await p.click('#check');
  const fbt = await p.textContent('#fb');
  ok(/По дебету вы поставили 2510/.test(fbt) && /Кредит 1090 — верно/.test(fbt) && !!(await p.$('.slot.bad')) && !!(await p.$('.slot.ok')), 'wrong debit explained, right credit confirmed');
  // operations of several lines with sums to work out (ducts2)
  const fillLine = async (i, d, k, s) => {
    await p.click(`#slot-d-${i}`); await p.fill('.ov .search', d); await p.press('.ov .search', 'Enter'); await p.waitForTimeout(60);
    await p.click(`#slot-k-${i}`); await p.fill('.ov .search', k); await p.press('.ov .search', 'Enter'); await p.waitForTimeout(60);
    await p.fill(`#amt-${i}`, String(s));
  };
  const toList = async () => { await p.goto('file://' + file + '#cases'); await p.waitForTimeout(200); for (let k = 0; k < 3 && !(await p.$('.cases')); k++) { await p.evaluate(() => window.handleBack()); await p.waitForTimeout(100); } };
  await toList();
  await p.click('.case:has-text("считаем сами")'); await p.click('#next'); await p.waitForTimeout(150);
  if (!(await p.$('.lcard'))) await p.click('[data-k="am:input"]');
  ok(/Суммы считаете сами/.test(await p.textContent('.prompt')) && await p.$eval('#check', x => x.disabled), 'computed sum asked, check waits for it');
  await fillLine(0, '5110', '6310', 151200000);
  ok(!(await p.$eval('#check', x => x.disabled)), 'check enabled once accounts and sum are in');
  await p.click('#check'); ok(!!(await p.$('.fb.ok')), 'computed advance accepted');
  await p.click('#next'); await p.waitForTimeout(100);
  ok((await p.$$('.lcard')).length === 2, 'two line cards for steel + VAT');
  await fillLine(0, '4410', '6010', 14400000); await fillLine(1, '1010', '6010', 120000000);
  await p.screenshot({ path: outdir + '/e2e_multi.png', fullPage: true });
  await p.click('#check'); ok(!!(await p.$('.fb.ok')) && (await p.$$('.lcard.ok')).length === 2, 'lines accepted in any order');
  await p.click('#next'); await p.waitForTimeout(100);
  await fillLine(0, '6010', '5110', 120000000); await p.click('#check');
  const fbs = (await p.textContent('#fb')).replace(/\u00a0/g, ' ');
  ok(/сумма 120 000 000, а нужно 134 400 000/.test(fbs) && !!(await p.$('.amt-in.badb')) && (await p.$$('.slot.ok')).length === 2, 'wrong sum explained, accounts marked right');
  await p.screenshot({ path: outdir + '/e2e_multi_bad.png', fullPage: true });
  await p.click('#next'); await p.waitForTimeout(100);
  await p.click('[data-k="am:choice"]'); await p.waitForTimeout(100);
  ok((await p.$$('.opt .lset')).length === 4, 'four sets of lines to choose from');
  await p.screenshot({ path: outdir + '/e2e_sets.png', fullPage: true });
  await p.click('.opt >> nth=0'); ok(!!(await p.$('.fb')) && /Разбор операции/.test(await p.textContent('#fb')), 'set answer shows the breakdown');
  await p.click('[data-k="am:input"]').catch(() => {});
  // read mode lists every line
  await p.evaluate(() => window.handleBack());
  await p.click('button:has-text("Читать решение")'); await p.waitForTimeout(200);
  ok((await p.$$('#st-1 .step-p')).length === 2 && (await p.$$('#st-5 .step-p')).length === 3, 'solution shows all lines of an operation');
  // leasing example: a simple step and a two-line payment
  await toList();
  await p.click('.case:has-text("Станок в лизинг")'); await p.click('#next'); await p.waitForTimeout(150);
  if (!(await p.$('#slot-d'))) await p.click('[data-k="am:input"]');
  await pickBySearch('d', '0310'); await pickBySearch('k', '7910'); await p.click('#check');
  ok(!!(await p.$('.fb.ok')), 'lease: asset and long-term debt');
  // trainer: recent accounts and «Не знаю»
  await p.goto('file://' + file + '#entries'); await p.waitForTimeout(300);
  if (!(await p.$('#slot-d'))) await p.click('[data-k="am:input"]');
  await p.click('#slot-d'); await p.waitForTimeout(100);
  ok(/Недавние/.test(await p.textContent('.ov')), 'picker offers recent accounts');
  await p.click('.ov .pchips .chip >> nth=0'); await p.waitForTimeout(100);
  ok(/\d{4}/.test(await p.textContent('#slot-d')), 'recent account placed');
  await p.click('button:has-text("Не знаю")'); ok(!!(await p.$('.fb')) && !!(await p.$('#why')), 'show-answer gives the breakdown');
  // trainer: an entry used in an example shows the example and links to it
  await p.evaluate(() => { const s = JSON.parse(localStorage.getItem('nsbu21-trener:v1')); s.prefs.entInput = 'choice'; s.rounds = {}; localStorage.setItem('nsbu21-trener:v1', JSON.stringify(s)); });
  await p.reload(); await p.waitForTimeout(200); await p.goto('file://' + file + '#entries'); await p.waitForTimeout(300);
  let found = false;
  for (let i = 0; i < 60 && !found; i++) {
    await p.click('.opt >> nth=0'); await p.waitForTimeout(40);
    const why = await p.$('button:has-text("Почему?")'); if (why) await why.click();
    if (await p.$('.ex')) { found = true; break; }
    await p.click('#next'); await p.waitForTimeout(40);
    if (await p.$('button:has-text("Новый раунд")')) await p.click('button:has-text("Новый раунд")');
  }
  ok(found, 'trainer shows a practical example for a common entry');
  if (found) { await p.click('.ex .linkbtn'); await p.waitForTimeout(300); ok(!!(await p.$('.step.hl')) && /cases/.test(await p.evaluate(() => location.hash)), 'example link opens the example at that operation'); }
  ok(!errs.length, 'no page errors ' + errs.join('; '));
  await b.close();
})();
