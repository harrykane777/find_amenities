const axios = require('axios');

// Url for live carparks data
const liveUrl = 'https://api.transport.nsw.gov.au/v1/carpark?facility=';

// Url for history of carparks data
const historyUrl = '&eventdate=';

// apiKey for authorisation
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1Nng5cDNzbm9veUNNaTNWWWxLdDNITlRQY0ZrRllGY3Q5Wl9xSUJQaEZrIiwiaWF0IjoxNzA2OTQwMzkyfQ.TTHIVcsOeUV82mxFBax18G0HrGWJhpQd0cT9RCsIAJs';

const headers = {
  'Accept': 'application/json',
  'Authorization': `apikey ${apiKey}`
};

const jsonData = {
  "6": "Gordon Henry St North Car Park",
  "7": "Kiama Car Park",
  "8": "Gosford Car Park",
  "9": "Revesby Car Park",
  "10": "Warriewood Car Park",
  "11": "Narrabeen Car Park",
  "12": "Mona Vale Car Park",
  "13": "Dee Why Car Park",
  "14": "West Ryde Car Park",
  "15": "Sutherland East Parade Car Park",
  "16": "Leppington Car Park",
  "17": "Edmondson Park South Car Park",
  "18": "St Marys Car Park",
  "19": "Campbelltown Farrow Rd North Car Park",
  "20": "Campbelltown Hurley Street South Car Park",
  "21": "Penrith Combewood At-Grade Car Park",
  "22": "Penrith Combewood Multi-Level Car Park",
  "23": "Warwick Farm Car Park",
  "24": "Schofields Car Park",
  "25": "Hornsby Jersey St Car Park",
  "26": "Tallawong P1 Car Park",
  "27": "Tallawong P2 Car Park",
  "28": "Tallawong P3 Car Park",
  "29": "Kellyville North Car Park",
  "30": "Kellyville South Car Park",
  "31": "Bella Vista Car Park",
  "32": "Hills Showground Car Park",
  "33": "Cherrybrook Car Park",
  "486": "Ashfield Car Park",
  "487": "Kogarah Car Park",
  "488": "Seven Hills Car Park",
  "489": "Manly Vale Car Park",
  "490": "Brookvale Car Park"
};

for (const key in jsonData) {
  axios.get(liveUrl + key, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
}

