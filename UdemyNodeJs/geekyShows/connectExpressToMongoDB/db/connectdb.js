import mongoose from 'mongoose';

// const connectDB = (url) => {
//   mongoose
//     .connect(url)
//     .then(() => {
//       console.log('Connected successfully...');
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
const db_ptions = {
  user: 'yogesh',
  pass: '123456',
  dbName: 'schooldb',
  authSource: 'schooldb',
};
const connectDB = async url => {
  try {
    await mongoose.connect(url).then(() => {
      console.log('Connected successfully...');
    });
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
