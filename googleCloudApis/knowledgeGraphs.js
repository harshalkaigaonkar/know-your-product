const axios = require('axios');

module.exports.knowledgeGraphs = async (title) => {
    const res = await axios.get(`https://kgsearch.googleapis.com/v1/entities:search?query=${title}&key=AIzaSyAI2f3LnJl9MWyj18Kitv3JpUYz-J1_l2A&limit=10&indent=True`);
    let result = 0;
    res.data.forEach(element => {
        result = result + element.resultScore;
    });
    result = result/10;
    return result;
}