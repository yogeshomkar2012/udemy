import mongoose from 'mongoose';
import express from 'express';
const app = express();

const connectDB = async url => {
  try {
    await mongoose.connect(url).then(console.log('connected succesfully'));
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
