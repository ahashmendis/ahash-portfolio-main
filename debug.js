import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log(`[Browser ${msg.type()}] ${msg.text()}`);
  });
  
  page.on('pageerror', err => {
    console.log('[Browser ERROR]', err.message);
  });

  await page.goto('http://localhost:5173', { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 6000));
  await browser.close();
})();
