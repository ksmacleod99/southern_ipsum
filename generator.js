//code generates random lorem ipsum text
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

LoremIpsum.prototype.generate

lorem.generateWords(1);
lorem.generateSentences(5);
lorem.generateParagraphs(7);

module.exports = LoremIpsum;