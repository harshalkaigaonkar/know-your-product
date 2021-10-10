const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

module.exports.CloudLanguageProcessing = async (text) => {
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    // Detects entities in the document
    const [result] = await client.analyzeEntitySentiment({ document });

    const entities = result.entities;

    let output = [];
    let score=0, magnitude=0;
    entities.forEach(entity => {
        score = score + entity.sentiment.score;
        magnitude = magnitude + entity.sentiment.magnitude;
    });
    score = score / entities.length;
    magnitude = magnitude / entities.length;
    output.push([score, magnitude]);
    return output;
}
module.exports.sentimentalAnalysis = async (text) => {
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    const [result] = await client.analyzeSentiment({ document });

    const sentiment = result.documentSentiment;

    let output = [];
    let score, magnitude;
    score = sentiment.score;
    magnitude = sentiment.magnitude;
    output.push([score, magnitude]);
    return output;
}