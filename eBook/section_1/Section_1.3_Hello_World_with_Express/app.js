var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
 
});
console.dir(app.locals);

app.listen(3000);
