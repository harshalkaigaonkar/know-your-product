

module.exports.getProducts = (req, res) => {
    // scrape from flipkart and amazon based on key
    const key = req.params.key;

    const data = await scrap(key)

}