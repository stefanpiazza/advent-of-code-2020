const twoSum = (data, target) => {
  const tempData = {};

  for (let i = 0; i < data.length; i += 1) {
    let difference = target - data[i];

    if (tempData[difference] && tempData[difference] !== i) {
      return [i, tempData[difference]];
    } else {
      tempData[data[i]] = i;
    }
  }
};

module.exports = twoSum;
