const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const techerRouter = require('./routes/teachers');
const studentRouter = require('./routes/students');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
// routes
app.use('/teacher', techerRouter);
app.use('/student', studentRouter);
app.get('/', (req, res, next) => {
  res.render('index');
});
// app.use((req, res) => {
//   res.send('page not found');
// });
app.listen(port, () => {
  console.log(`server started at : http://localhost:${port}`);
});
