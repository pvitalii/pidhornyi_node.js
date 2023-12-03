const getMaxOccuringLetter = require("max-occuring-letter");
const fs = require('fs/promises');

async function maxOccuringLetterFromFile(pathToFile) {
  try {
    const text = (await fs.readFile(pathToFile)).toString();
    return getMaxOccuringLetter(text);
  } catch (err) {
    console.log(err);
  }
}

const path = process.argv[2];

maxOccuringLetterFromFile(path).then(console.log);



