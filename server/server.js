const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

require('dotenv').config({path: '../.env'});

const { PORT } = require('../config');
const { CLIENT_ORIGIN } = require('../config');

const app = express();
app.use(express.static('public'));
app.use(
  cors({
      origin: CLIENT_ORIGIN
  })
);


app.get('/people', (req, res) => {
  const baseUrl = 'https://api.salesloft.com/v2/people.json'
  const apiKey = process.env.API_KEY

  fetch(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }
  })
  .then(res => res.json())
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});