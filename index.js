const express = require('express');
const app = express();
const quotes = require('./quotes.json');

app.get('/quote', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(quote);
});

app.listen(3000, () => {
  console.log('API server started on port 3000');
});
