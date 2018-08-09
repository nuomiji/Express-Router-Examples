const express = require('express');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public'))); //virtual path prefix
app.use(express.static('files'));

app.listen(3000, () => {
  console.log("Listening on port 3000...");
})
