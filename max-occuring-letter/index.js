function getMaxOccurringLetter(text) {
  text = text.replace(/[^a-zA-Z]/g, '').toLowerCase();

  if (!text) {
    throw new Error('No letters in text');
  }

  let map = new Map();
  let result;
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    map.set(text[i], (map.get(text[i]) ?? 0) + 1);

    if (count < map.get(text[i])) {
      result = text[i];
      count = map.get(text[i]);
    }
  }

  return result;
}

module.exports = getMaxOccurringLetter
