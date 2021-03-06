var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
var app = express();

dotenv.config();

function rootLogger(req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
}

function rootGetHandler(req, res) {
  var indexPath = path.join(__dirname, '/views/index.html');
  res.sendFile(indexPath);
}

function jsonGetHandler(req, res) {
  var responseString = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    responseString = responseString.toUpperCase();
  }
  var responseObj = { "message": responseString };
  res.json(responseObj);
}

app.use('/', rootLogger);
app.get('/', rootGetHandler);
app.get('/json', jsonGetHandler);
app.use('/public', express.static(__dirname + '/public'));






























 module.exports = app;
