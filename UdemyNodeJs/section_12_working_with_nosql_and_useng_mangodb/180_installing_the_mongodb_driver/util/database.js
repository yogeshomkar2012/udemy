const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoConnect = cb => {
  MongoClient.connect(
    'mongodb+srv://Yogesh12_3:Yogesh12_3@nodejsmongodb.kfq8zdn.mongodb.net/?retryWrites=true&w=majority&appName=nodejsmongodb'
  )
    .then(result => {
      console.log('Connected');
      cb(result);
    })
    .catch(err => {
      console.log(err);
    });
};
module.exports = mongoConnect;
