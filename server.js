const express = require('express');

require('dotenv').config();

const PORT = require('./config');

const app = express();
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});