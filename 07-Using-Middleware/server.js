var express = require('express');
var app = express();

// req.params
// req.method
// req.orginalUrl

app.get('/user/:id', (req, res, next) => {
  if (req.params.id === '0') {
    next('route');
  } else {
    next();
  }
}, (req, res, next) => {
  res.send('regular');
});

app.get('/user/:id', (req, res, next) => {
  res.send('special');
})

app.listen(3000);
