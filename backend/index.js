const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/getCarParks", (req, res) => {
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1Nng5cDNzbm9veUNNaTNWWWxLdDNITlRQY0ZrRllGY3Q5Wl9xSUJQaEZrIiwiaWF0IjoxNzA2OTQwMzkyfQ.TTHIVcsOeUV82mxFBax18G0HrGWJhpQd0cT9RCsIAJs';
  const headers = {
    'Accept': 'application/json',
    'Authorization': `apikey ${apiKey}`
  };

  axios.get('https://api.transport.nsw.gov.au/v1/carpark', { headers })
  .then(response => res.json(response.data))
  .catch(error => console.error(error.message));
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});