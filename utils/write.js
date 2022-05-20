const fs = require("fs");

const write = async (dataToChange) => {
  return new Promise((resolve) => {
    fs.writeFile("./data/data.json", dataToChange, () => {
      resolve();
    });
  });
};

module.exports = write;
