const data = require("./data");

const twoSum = require("./two-sum");

const twoSumResult = twoSum(data, 2020);
const [i, j] = twoSumResult;

console.log(data[i] * data[j]);
