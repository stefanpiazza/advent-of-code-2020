const data = require("./data");

const formatData = (data) => {
  const splitData = data.split(/\n\n/);

  const formattedData = [];

  for (var i = 0; i < splitData.length; i++) {
    formattedData[i] = [];

    const passports = splitData[i].replace(/\s/g, " ");
    const details = passports.split(" ");

    for (var j = 0; j < details.length; j++) {
      const [key, value] = details[j].split(":");
      formattedData[i].push({ key, value });
    }
  }

  return formattedData;
};

// Part 1
(() => {
  let validPassports = 0;

  const formattedData = formatData(data);

  formattedData.forEach((item) => {
    let validFields = [];

    item.forEach((field) => {
      validFields.push(field.key);
    });

    if (validFields.length === 8) {
      validPassports += 1;
    }

    if (validFields.length === 7 && validFields.indexOf("cid") == -1) {
      validPassports += 1;
    }
  });

  console.log(validPassports);
})();

// Part 2
(() => {
  const eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

  let validPassports = 0;

  const formattedData = formatData(data);

  formattedData.forEach((item) => {
    let validFields = [];

    item.forEach((field) => {
      if (field.key === "byr") {
        if (
          field.value.length === 4 &&
          field.value >= 1920 &&
          field.value <= 2002
        ) {
          validFields.push(field.key);
        }
      }

      if (field.key === "iyr") {
        if (
          field.value.length === 4 &&
          field.value >= 2010 &&
          field.value <= 2020
        ) {
          validFields.push(field.key);
        }
      }

      if (field.key === "eyr") {
        if (field.value >= 2020 && field.value <= 2030) {
          validFields.push(field.key);
        }
      }

      if (field.key === "hgt") {
        const cm = field.value.match(/cm/g);
        const cmValue = field.value.substring(0, field.value.length - 2);

        if (cm && cmValue >= 150 && cmValue <= 193) {
          validFields.push(field.key);
        }

        const inch = field.value.match(/in/g);
        const inchValue = field.value.substring(0, field.value.length - 2);

        if (inch && inchValue >= 59 && inchValue <= 76) {
          validFields.push(field.key);
        }
      }

      if (field.key === "hcl") {
        const colorValue = field.value.match(/\#([a-f]|[0-9]){6}/g);

        if (colorValue) {
          validFields.push(field.key);
        }
      }

      if (field.key === "ecl") {
        if (eyeColors.indexOf(field.value) !== -1) {
          validFields.push(field.key);
        }
      }

      if (field.key === "pid") {
        if (field.value.length === 9) {
          validFields.push(field.key);
        }
      }
    });

    if (validFields.length === 8) {
      validPassports += 1;
    }

    if (validFields.length === 7 && validFields.indexOf("cid") === -1) {
      validPassports += 1;
    }
  });

  console.log(validPassports);
})();
