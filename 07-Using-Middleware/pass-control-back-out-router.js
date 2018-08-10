var express = require('express');
var app = express();
var router = express.Router();

// predicate the router with a check and bial out when needed
router.use((req, res, next) => {
  // if client is unauthorized, fall through
	if (!req.headers['x-auth']) return next('router');
	next();
});

// authorized users will end up here
router.get('/', (req, res) => {
  res.send('Hello, user!');
});

// use the router and 401 anything falling through
app.use('/admin', router, (req, res) => {
  res.sendStatus(401);
});

// error handling middleware, MUST include next as a parameter (4 parameters in total)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);
