const { scrapeAndProcessData } = require('../scrapper/index')

module.exports.getProducts = async (req, res) => {
    // scrape from flipkart and amazon based on key
    const key = req.body.key;

    try {
        // scrapeAndProcessData returns an array of data
        const data = await scrapeAndProcessData(key);

        // if required, can store data in a DB

        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "message": "Something Gone Wrong !!" })
    }

}