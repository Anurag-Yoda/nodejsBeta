const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;


const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://anurag:Kehkelunga_786@cluster0-sn3p1.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("conneceted");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw "No DB found!";
  }
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
