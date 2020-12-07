const data = require("./data");

// Part 1
(() => {
  const splitData = data.split(/\n\n/).map((x) => x.split(/\n/));

  let total = 0;

  splitData.forEach((string) => {
    count = {};

    for (var i = 0; i < string.length; i++) {
      string[i].split("").forEach((character) => {
        if (!count[character]) {
          count[character] = 1;
        }
      });
    }

    total += Object.keys(count).length;
  });

  console.log(total);
})();
