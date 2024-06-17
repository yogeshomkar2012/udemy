import express from 'express';
import connectDb from './db/connectdb.js';
const app = express();
import router from './routes/web.js';
const conString = process.env.DB_URL || 'mongodb://localhost:27017/userauth';
const port = process.env.PORT || '3000';

// defalut engie setting
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));

// data base connection
connectDb(conString);
// data base connection
app.use(router);
app.listen(port, () => {
  console.log(`Server Started at : http://localhost:${port}`);
});
