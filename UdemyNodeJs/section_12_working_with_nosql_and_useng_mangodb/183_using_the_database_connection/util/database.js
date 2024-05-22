const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = cb => {
  MongoClient.connect(
    'mongodb+srv://Yogesh12_3:Yogesh12_3@nodejsmongodb.kfq8zdn.mongodb.net/shop?retryWrites=true&w=majority&appName=nodejsmongodb'
  )
    .then(client => {
      console.log('Connected');
      _db = client.db();
      cb();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};
const getdb = () => {
  if (_db) {
    return _db;
  }
  throw 'No Database found';
};
exports.mongoConnect = mongoConnect;
exports.getdb = getdb;
