var path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.redirect('http://localhost:3000/static/index.html');
});

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
