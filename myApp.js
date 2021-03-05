var express = require('express');
var app = express();

function rootGetHandler(req, res) {
  var responseString = 'Hello World';
  console.log('Request = ' + req);
  console.log('Response will be "' + responseString + '"');
  res.send(responseString);
}

app.get('/', rootGetHandler);
































 module.exports = app;
