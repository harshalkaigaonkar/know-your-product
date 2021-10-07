const { amazonScrape } = require('../scrapper/index')

module.exports.getProducts = async (req, res) => {
    // scrape from flipkart and amazon based on key
    const key = req.body.key;

    // amazonscrape returns an array of data
    const data = await amazonScrape(key);

    // if required, can store data in a DB

    

    res.send('hello');

}