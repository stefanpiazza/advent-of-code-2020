const data = require("./data");

const splitData = data.split(/\n/);

let largestSeatId = 0;

splitData.forEach((item) => {
  let rows = Array.from({ length: 128 }, (_, n) => n);
  let columns = Array.from({ length: 8 }, (_, n) => n);
  let seatId = 0;

  item.split("").forEach((i) => {
    if (i == "B") {
      rows = rows.slice(rows.length / 2, rows.length);
    }

    if (i == "F") {
      rows = rows.slice(0, rows.length / 2);
    }

    if (i == "L") {
      columns = columns.slice(0, columns.length / 2);
    }

    if (i == "R") {
      columns = columns.slice(columns.length / 2, columns.length);
    }
  });

  seatId = rows[0] * 8 + columns[0];

  if (seatId > largestSeatId) {
    largestSeatId = seatId;
  }
});

console.log(largestSeatId);
