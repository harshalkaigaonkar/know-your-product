const puppeteer = require('puppeteer');
const axios = require('axios');
const { processData } = require('../googleCloudApis/process');
const { knowledgeGraphs } = require('../googleCloudApis/knowledgeGraphs');
require('dotenv').config();
const api_key = process.env.API_KEY;

module.exports.scrapeAndProcessData = async (key) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(key);
    const title = await page.evaluate(() => document.querySelector('#productTitle').innerText);
    // more scrapping
    const data = await this.youtubeTranscript(title, browser);
    // this return is to be changed to upper function
    await browser.close();
    return data;
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

const getVideosLists = async (title) => {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAI2f3LnJl9MWyj18Kitv3JpUYz-J1_l2A&type=video&part=snippet&q=${title} review&maxResults=5&order=relevance&videoCaption=closedCaption`);
    let videosList = res.data.items;
    return videosList;
}

module.exports.youtubeTranscript = async (title, browser) => {
    // search from api
    let videosList = await getVideosLists(title);
    // scrape captions
    let allTranscripts = "";
    const page = await browser.newPage();
    for (let i = 0; i < videosList.length; i++) {
        await page.goto(`https://youtubetranscript.com/?v=${videosList[i].id.videoId}`);
        await page.waitForSelector('div#demo > a.youtube-marker', { timeout: 0 });
        let transcript = await page.evaluate(() => document.querySelector('div#demo').textContent === undefined ? 'null' : document.querySelector('div#demo').textContent);
        allTranscripts = allTranscripts + transcript;
    }
    let data = await processData(allTranscripts);
    return data;
}