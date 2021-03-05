var express = require('express');
var path = require('path');
var app = express();

function rootGetHandler(req, res) {
  var indexPath = path.join(__dirname, '/views/index.html');
  res.sendFile(indexPath);
}

app.get('/', rootGetHandler);
































 module.exports = app;
