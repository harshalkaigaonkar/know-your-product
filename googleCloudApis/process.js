const { sentimentalAnalysis, CloudLanguageProcessing } = require("./CloudLanguageProcessing");
const { toxicityDetection } = require("./toxicityDetection");

module.exports.processData = async (transcripts) => {
    let data = {};
    const sentimental = await sentimentalAnalysis(transcripts);
    const toxicity = await toxicityDetection(transcripts);
    const textEntityProcessing = await CloudLanguageProcessing(transcripts);
    data = { sentimental, toxicity, textEntityProcessing }
    return data;
}