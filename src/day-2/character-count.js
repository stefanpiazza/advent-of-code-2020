const characterCount = (string, character) => {
  let count = 0;

  string.split("").forEach((item) => {
    if (item === character) {
      count += 1;
    }
  });

  return count;
};

module.exports = characterCount;
