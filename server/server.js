const express = require('express');

require('dotenv').config();

const { PORT } = require('../config');

const app = express();
app.use(express.static('public'));
console.log("hello world!");

app.get('/people', (req, res) => {

  const baseUrl = 'https://api.salesloft.com/v2/people.json'
  const { KEY } = require('dotenv').config();

  fetch(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${KEY}`

    }
  })

})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});