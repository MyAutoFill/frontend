const puppeteer = require('puppeteer');
 
async function runSelenium() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://your-website.com');
  // 在这里添加你的自动化操作，例如点击按钮、填写表单等
  await browser.close();
}
 
module.exports = {
  runSelenium,
};