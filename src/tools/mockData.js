const newSquashRequest = {
  StartDate: new Date().toLocaleDateString(),
  StartTime: "17:00",
  EndTime: "19:00",
  Duration: 60,
  Exclude: [1, 2]
};

module.exports = {
  newSquashRequest
};
