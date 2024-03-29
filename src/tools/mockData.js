const newSquashRequest = {
  StartDate: new Date().toLocaleDateString(),
  StartTime: "17:00",
  EndTime: "19:00",
  Duration: 60,
  Exclude: [1, 2],
  type: "squash",
  email: "",
  password: ""
};

const newBadmintonRequest = {
  StartDate: new Date().toLocaleDateString(),
  StartTime: "17:00",
  EndTime: "19:00",
  Duration: 60,
  Exclude: [],
  type: "badminton"
};

const courtsNoData = [];

const freeCourtsBadminton = [
  {
    number: 3,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T20:00:00",
        to: "2019-09-26T21:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 4,
    free: [
      {
        from: "2019-09-26T20:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "02:00:00"
      }
    ]
  },
  {
    number: 5,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T20:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "02:00:00"
      }
    ]
  },
  {
    number: 6,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 7,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 8,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 9,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 10,
    free: [
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  }
];

const freeCourtsExclude = [
  {
    number: 3,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T20:00:00",
        to: "2019-09-26T21:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 4,
    free: [
      {
        from: "2019-09-26T20:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "02:00:00"
      }
    ]
  },
  {
    number: 5,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T20:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "02:00:00"
      }
    ]
  },
  {
    number: 6,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 7,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 8,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 9,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 10,
    free: [
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 11,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 13,
    free: [
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 14,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 15,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 20,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 21,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 28,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T17:30:00",
        to: "2019-09-26T19:00:00",
        availableTime: "01:30:00"
      },
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 29,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      },
      {
        from: "2019-09-26T21:00:00",
        to: "2019-09-26T22:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 30,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 31,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      }
    ]
  },
  {
    number: 32,
    free: [
      {
        from: "2019-09-26T15:00:00",
        to: "2019-09-26T16:00:00",
        availableTime: "01:00:00"
      }
    ]
  }
];

module.exports = {
  newSquashRequest,
  freeCourtsExclude,
  courtsNoData,
  newBadmintonRequest,
  freeCourtsBadminton
};
