var express = require('express');
var app = express();

// *********************Example B***********************
app.get('/example/b', (req, res, next) => {
	console.log('the response will be sent by the next function ...');
	next();
}, (req, res) => {
	res.send('Hello from B!');
});

// ********************Example C**************************
var cb0 = (req, res, next) => {
	console.log('CB0');;
	next();
}
var cb1 = (req, res, next) => {
	console.log('CB1');;
	next();
}

var cb2 = (req, res) => {
	console.log('CB2');;
	res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

// ***********************Example D**************************
var cb0 = (req, res, next) => {
	console.log('CB0');
	next();
}
var cb1 = (req, res, next) => {
	console.log('CB1');
	next();
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
	console.log('the response will be sent by the next function...');
	next();
}, (req, res, next) => {
	res.send('Hello from D!');
});

// ***********************express.Router************************
var birds = require('./birds');

app.use('/birds', birds);

app.listen(3000, () => {
	console.log("Listening on port 3000...");
});
