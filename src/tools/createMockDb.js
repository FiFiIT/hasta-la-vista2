const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { newSquashRequest, freeCourtsExclude, courtsNoData } = mockData;
const data = JSON.stringify({
  newSquashRequest,
  freeCourtsExclude,
  courtsNoData
});
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
