var express = require('express');
var path = require('path');
var app = express();

function rootGetHandler(req, res) {
  var indexPath = path.join(__dirname, '/views/index.html');
  res.sendFile(indexPath);
}

function jsonGetHandler(req, res) {
  var responseObj = { "message": "Hello json" };
  res.json(responseObj);
}

app.get('/', rootGetHandler);
app.get('/json', jsonGetHandler);
app.use('/public', express.static(__dirname + '/public'));
































 module.exports = app;
