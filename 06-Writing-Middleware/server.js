var express = require('express');
var app = express();
var mw = require('./my-middleware.js');

app.use(mw({option1: '1', option2: '2'}));

var myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
}

var requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
}

app.use([myLogger, requestTime]);

app.get('/', (req, res) => {
  var responseText = 'Hello World!<br>';
  responseText += '<small>Requested at: ' + req.requestTime + '</small>';
  res.send(responseText);
});

app.listen(3000);
