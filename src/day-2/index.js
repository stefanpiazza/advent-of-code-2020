const data = require("./data");

const parseData = require("./parse-data");
const characterCount = require("./character-count");

const parsedData = parseData(data);

// Part 1
(() => {
  let validPasswords = 0;

  parsedData.forEach((item) => {
    const count = characterCount(item.string, item.character);

    if (count >= item.min && count <= item.max) {
      validPasswords += 1;
    }
  });

  console.log(validPasswords);
})();

// Part 2
(() => {
  let validPasswords = 0;

  parsedData.forEach((item) => {
    const isFirstValid =
      item.string[item.min - 1] == item.character ? true : false;
    const isSecondValid =
      item.string[item.max - 1] == item.character ? true : false;

    validPasswords += isFirstValid ^ isSecondValid;
  });

  console.log(validPasswords);
})();
