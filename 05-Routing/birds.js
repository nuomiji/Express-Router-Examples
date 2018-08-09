var express = require('express');
var router = express.Router();

// middleware that is specific to this Router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

// define the home page route
router.get('/', (req, res) => {
	res.send('Birds home page');
});

router.get('/about', (req, res) => {
	res.send('About birds');
});

module.exports = router;
