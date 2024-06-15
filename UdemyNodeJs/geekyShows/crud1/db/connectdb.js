const mongoose = require('mongoose');
const express = require('express');
const app = express();

const connectDB = async url => {
  try {
    await mongoose.connect(url).then(console.log('connected succesfully'));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
