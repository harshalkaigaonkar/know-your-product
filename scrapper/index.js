const puppeteer = require('puppeteer');

module.exports.amazonScrape = async (key) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(key);
    const title = await page.evaluate(() => document.querySelector('#productTitle').innerText);
    await browser.close();
    // more scrapping
    return title;
}

module.exports.googleNewsScrape = async (title) => {
    const url = 'https://www.news.google.com/'
    const searchOptions = {
        input: "input.Ax4B8.ZAGvjd",
    }
    const googleNewsOptions = {
        selector: "div.NiLAwe.y6IFtc.R7GTQ.keNKEd.j7vNaf.nID9nc > a"
    }
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(searchOptions.input);
    await page.type(searchOptions.input, title);
    await page.keyboard.press('Enter');
    await page.waitForSelector(googleNewsOptions.selector).then(async () => newsUrl = await page.evaluate(() => document.querySelector(googleNewsOptions.selector).href));
}
