const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Time: ' , Date.now());
  next();
});

app.use('/user/:id', (req, res, next) => {
  console.log('Request URL: ', req.originalUrl);
  next();
}, (req, res, next) => {
  console.log('Request Type: ', req.method);
  next();
});

app.get('/user/:id', (req, res, next) => {
  res.send('USER');
})

app.listen(3000, () => {
  console.log('Example app lisening on port 3000!');
});
