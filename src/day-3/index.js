const data = require("./data");

const splitData = data.split("\n");

const countTrees = (data, right, down) => {
  let count = 0;
  let x = 0;

  for (var i = down; i < data.length; i += down) {
    if (data[i][(x += right) % data[i].length] == "#") {
      count += 1;
    }
  }

  return count;
};

// Part 1
(() => {
  console.log(countTrees(splitData, 3, 1));
})();

// Part 2
(() => {
  const route1 = countTrees(splitData, 1, 1);
  const route2 = countTrees(splitData, 3, 1);
  const route3 = countTrees(splitData, 5, 1);
  const route4 = countTrees(splitData, 7, 1);
  const route5 = countTrees(splitData, 1, 2);

  console.log(route1 * route2 * route3 * route4 * route5);
})();
