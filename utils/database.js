const mongoDb = require("mongodb");
const MongoClient = mongoDb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb://localhost:27017"
  )
  .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "Database not found!";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;