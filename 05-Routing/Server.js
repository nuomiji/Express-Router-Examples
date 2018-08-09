var express = require('express');
var app = express();

// ******************Route Parameters********************
// http://localhost:3000/user/100/books/2000
// app.get('/user/:userId/books/:bookId', (req, res, next) => {
// 	console.log(req.params); // { userId: '100', bookId: '2000' }
// 	res.send(req.params.userId + " " + req.params.bookId);
// })

// http://localhost:3000/flights/LAX-SFO
app.get('/flights/:from-:to', (req, res, next) => {
  console.log(req.params); // {from: LAX, to: SFO}
  res.send(req.params);
});

// http://localhost:3000/images/picture.jpg
app.get('/images/:name.:suffix', (req, res, next) => {
  console.log(req.params); //{name: picture, suffix: jpg}
  res.send(req.params);
});

// http:localhost:3000/user/42
app.get("/user/:userId(\\d+)", (req, res, next) => {
  console.log(req.params); // {userId: 42}
  res.send(req.params);
});

// ********************Methods****************************
app.get('/', (req, res) => {
	res.send('GET request to the homepage');
})

app.post('/', (req, res) => {
	res.send('POST request to the homepage');
})

app.all('/secret', (req, res, next) => {
	console.log('Accessing the secret section ...');
	next();
}, (req, res, next) => {
	res.send("Secret");
});

// **********************RegEx*************************
// will match acd and abcd
app.get('/ab?cd', (req, res) => {
	res.send('ab?cd');
});
// will match abcd, abbcd, abbbcd etc
app.get('/ab+cd', (req, res) => {
	res.send('ab+cd;')
});
// will match acd, abcd, abbbbbcd
app.get('/ab*cd', (req, res) => {
	res.send('ab*cd');
});
// will match abcde and abe
app.get('/ab(cd)?e', (req, res) => {
	res.send('ab(cd)?e');
});

// This route path will match butterfly and dragonfly,
// but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, function(req, res) {
	res.send('/.*fly$/')
})
app.listen(3000, () => {
	console.log("Listening on port 3000...");
})
