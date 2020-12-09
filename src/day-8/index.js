const { split } = require("./data");
const data = require("./data");

// Part 1
(() => {
  const splitData = data.split(/\n/).map((x) => x.split(" "));

  const instructionCount = [];
  let count = 0;

  let loop = true;
  let index = 0;
  let acc = 0;

  while (loop) {
    const instruction = splitData[index];

    const operation = instruction[0];
    const argument = instruction[1];

    if (!instructionCount[index]) {
      instructionCount[index] = 1;
    } else {
      loop = false;
      break;
    }

    const splitArgument = argument.split(/(\+|\-)/);

    const sign = splitArgument[1];
    const number = Number(splitArgument[2]);

    if (operation === "nop") {
      index += 1;
    } else if (operation === "acc") {
      index += 1;

      if (sign === "+") {
        acc += number;
      } else {
        acc -= number;
      }
    } else if (operation === "jmp") {
      if (sign === "+") {
        index += number;
      } else {
        index -= number;
      }
    }
  }

  console.log(acc);
})();
