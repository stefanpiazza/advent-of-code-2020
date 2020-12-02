const parseData = (data) => {
  const items = data.split("\n");

  return items.map((item) => {
    const splitItem = item.split(" ");
    const character = splitItem[1][0];
    const string = splitItem[2];
    const range = splitItem[0].split("-");
    const min = range[0];
    const max = range[1];

    return {
      string,
      character,
      min,
      max,
    };
  });
};

module.exports = parseData;
