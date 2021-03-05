var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
var app = express();

dotenv.config();

function rootGetHandler(req, res) {
  var indexPath = path.join(__dirname, '/views/index.html');
  res.sendFile(indexPath);
}

function jsonGetHandler(req, res) {
  var responseString = "Hello json";
  console.log(process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === "uppercase") {
    console.log('Converting to upper case');
    responseString = responseString.toUpperCase();
  }
  var responseObj = { "message": responseString };
  res.json(responseObj);
}

app.get('/', rootGetHandler);
app.get('/json', jsonGetHandler);
app.use('/public', express.static(__dirname + '/public'));

console.log(process.env.MESSAGE_STYLE);































 module.exports = app;
