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
  await p.evaluate(() => { const s = JSON.parse(localStorage.getItem('nsbu21-trener:v1')); s.prefs.entInput = 'input'; localStorage.setItem('nsbu21-trener:v1', JSON.stringify(s)); });
  await p.goto('file://' + file + '#cases'); await p.reload(); await p.waitForTimeout(300);
  await p.click('.case >> nth=6'); await p.click('#next'); await p.waitForTimeout(150);
  await p.fill('#ent-dt', '4220'); await p.fill('#ent-kt', '5010'); await p.click('button:has-text("Проверить")');
  ok(!!(await p.$('.fb.ok')), 'typed codes accepted (trip #1: 4220/5010)');
  await p.click('#next'); await p.fill('#ent-dt', '9410'); await p.fill('#ent-kt', '4220'); await p.click('button:has-text("Проверить")');
  ok(!!(await p.$('.fb.bad')) && /по дебету вы ввели 9410/.test(await p.textContent('#fb')), 'wrong typed code explained');
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
