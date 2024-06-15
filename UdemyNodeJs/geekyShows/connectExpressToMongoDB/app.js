import express from 'express';
const dbURL = "mongodb://localhost:27017"
const app = express();
const port = process.env.PORT || 3000;
import connectDB from './db/connectdb.js';

connectDB(dbURL);

app.listen(port, () => {
  console.log(`Server listening at : http:localhost:${port}`);
});
