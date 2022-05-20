const fs = require("fs");

const read = async () => {
  return new Promise((resolve) => {
    fs.readFile(`./data/data.json`, (error, data) => {
      resolve(JSON.parse(data));
    });
  });
};

module.exports = read;
