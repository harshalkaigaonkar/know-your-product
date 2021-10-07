const puppeteer = require('puppeteer');

module.exports.amazonScrape = async (key) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(key);
    const title = await page.evaluate(() => document.querySelector('#productTitle').innerText);
    // more scrapping
    this.googleNewsScrape(title);
    return title;
}

module.exports.googleNewsScrape = async (title) => {
    const url = 'https://www.news.google.com/'
    const searchOptions = {
        input: "input.Ax4B8.ZAGvjd",
    }
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(searchOptions.input);
    await page.type(searchOptions.input, title);
    await page.keyboard.press('Enter');

}