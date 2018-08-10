var express = require('express');
var app = express();
var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
	console.log('Time', Date.now());
	next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
	console.log('Request URL:', req.originalUrl);
	next();
}, (req, res, next) => {
	console.log('Request Type:', req.method);
	next();
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
	if (req.params.id === '0') {
    next('route');
  } else {
    next();
  }
}, (req, res, next) => {
	res.send('regular');
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
	console.log(req.params.id);;
	res.send('special');
});

app.use('/', router);

app.listen(3000);
