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
  await p.click('.case >> nth=6'); await p.click('#next'); await p.waitForTimeout(150);
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
