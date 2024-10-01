const fs = require("fs");
const logReqRes = (filename) => {
  return (req, res, next) => {
    console.log("added to logs");
    fs.appendFile(filename, "\n" + Date.now(), (err) => {
      next();
    });
  };
};
module.exports = logReqRes;
