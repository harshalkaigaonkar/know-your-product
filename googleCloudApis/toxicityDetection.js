require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');

module.exports.toxicityDetection = async (transcripts) => {
    const threshold = 0.9;

    const model = await toxicity.load(threshold);
    const sentences = [transcripts];

    const predictions = await model.classify(sentences);
    return predictions;
}