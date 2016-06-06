"use strict";

var StateSelect = [
    {"name":"","abbreviation":""},
    {
        "name": "Alabama",
        "abbreviation": "AL",
    },
    {
        "name": "Alaska",
        "abbreviation": "AK",
    },

    {
        "name": "Arizona",
        "abbreviation": "AZ",
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR",
    },
    {
        "name": "California",
        "abbreviation": "CA",
    },
    {
        "name": "Colorado",
        "abbreviation": "CO",
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT",
    },
    {
        "name": "Delaware",
        "abbreviation": "DE",
    },
    {
        "name": "Florida",
        "abbreviation": "FL",
    },
    {
        "name": "Georgia",
        "abbreviation": "GA",
    },
    {
        "name": "Guam",
        "abbreviation": "GU",
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI",
    },
    {
        "name": "Idaho",
        "abbreviation": "ID",
    },
    {
        "name": "Illinois",
        "abbreviation": "IL",
    },
    {
        "name": "Indiana",
        "abbreviation": "IN",
    },
    {
        "name": "Iowa",
        "abbreviation": "IA",
    },
    {
        "name": "Kansas",
        "abbreviation": "KS",
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY",
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA",
    },
    {
        "name": "Maine",
        "abbreviation": "ME",
    },

    {
        "name": "Maryland",
        "abbreviation": "MD",
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA",
    },
    {
        "name": "Michigan",
        "abbreviation": "MI",
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN",
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS",
    },
    {
        "name": "Missouri",
        "abbreviation": "MO",
    },
    {
        "name": "Montana",
        "abbreviation": "MT",
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE",
    },
    {
        "name": "Nevada",
        "abbreviation": "NV",
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH",
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ",
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM",
    },
    {
        "name": "New York",
        "abbreviation": "NY",
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC",
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND",
    },

    {
        "name": "Ohio",
        "abbreviation": "OH",
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK",
    },
    {
        "name": "Oregon",
        "abbreviation": "OR",
    },

    {
        "name": "Pennsylvania",
        "abbreviation": "PA",
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR",
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI",
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC",
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD",
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN",
    },
    {
        "name": "Texas",
        "abbreviation": "TX",
    },
    {
        "name": "Utah",
        "abbreviation": "UT",
    },
    {
        "name": "Vermont",
        "abbreviation": "VT",
    },

    {
        "name": "Virginia",
        "abbreviation": "VA",
    },
    {
        "name": "Washington",
        "abbreviation": "WA",
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV",
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI",
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY",
    },
];

const data = [{
  "item_number": "1",
  "description": "Vagram",
  "price": "50.49"
}, {
  "item_number": "2",
  "description": "Tresom",
  "price": "70.35"
}, {
  "item_number": "3",
  "description": "Toughjoyfax",
  "price": "64.74"
}, {
  "item_number": "4",
  "description": "Home Ing",
  "price": "12.29"
}, {
  "item_number": "5",
  "description": "Gembucket",
  "price": "16.98"
}, {
  "item_number": "6",
  "description": "Pannier",
  "price": "67.76"
}, {
  "item_number": "7",
  "description": "Stim",
  "price": "2.50"
}, {
  "item_number": "8",
  "description": "Lotstring",
  "price": "38.32"
}, {
  "item_number": "9",
  "description": "Duobam",
  "price": "62.78"
}, {
  "item_number": "10",
  "description": "Toughjoyfax",
  "price": "1.62"
}, {
  "item_number": "11",
  "description": "Tempsoft",
  "price": "25.29"
}, {
  "item_number": "12",
  "description": "Treeflex",
  "price": "12.12"
}, {
  "item_number": "13",
  "description": "Matsoft",
  "price": "59.55"
}, {
  "item_number": "14",
  "description": "Y-Solowarm",
  "price": "11.68"
}, {
  "item_number": "15",
  "description": "Flexidy",
  "price": "53.82"
}, {
  "item_number": "16",
  "description": "Aerified",
  "price": "1.30"
}, {
  "item_number": "17",
  "description": "Alphazap",
  "price": "54.65"
}, {
  "item_number": "18",
  "description": "Lotlux",
  "price": "20.85"
}, {
  "item_number": "19",
  "description": "Pannier",
  "price": "34.78"
}, {
  "item_number": "20",
  "description": "Solarbreeze",
  "price": "48.17"
}, {
  "item_number": "21",
  "description": "Bamity",
  "price": "26.56"
}, {
  "item_number": "22",
  "description": "Stronghold",
  "price": "23.37"
}, {
  "item_number": "23",
  "description": "Mat Lam Tam",
  "price": "38.61"
}, {
  "item_number": "24",
  "description": "Bigtax",
  "price": "35.33"
}, {
  "item_number": "25",
  "description": "Ronstring",
  "price": "65.30"
}, {
  "item_number": "26",
  "description": "Pannier",
  "price": "57.64"
}, {
  "item_number": "27",
  "description": "Y-find",
  "price": "56.96"
}, {
  "item_number": "28",
  "description": "Veribet",
  "price": "55.87"
}, {
  "item_number": "29",
  "description": "Pannier",
  "price": "50.79"
}, {
  "item_number": "30",
  "description": "Solarbreeze",
  "price": "9.05"
}];

const contacts = [{
  first_name:'Thomas',
  last_name:'Shannon',
  email:'yolo@yahoo.com',
  address_1:'address',
  address_2:'address2',
  city:'las vegas',
  state:'NV',
  zip_code:'22233',
  phone_number:'7023470469'
}];

const List = {
  data,
  StateSelect,
  contacts
}
module.exports = {List}


