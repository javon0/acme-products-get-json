const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'products.json'));
});

app.get('/api/companies', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'companies.json'));
});

app.listen(3000, () => {
  console.log('listening port 3000');
});
