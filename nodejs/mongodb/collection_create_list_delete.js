var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function (err, db){
  var newDB = db.db("newDB");
  newDB.collectionNames(function (err , collectionNames) {
    console.log("Initial collection: ");
    console.log(collectionNames);
    newDB.createCollection("wangleiCollection", function(err, collection){
      newDB.collectionNames(function (err , collectionNames) {
        console.log("Affter collection: ");
        console.log(collectionNames);
        newDB.dropCollection("wangleiCollection", function(results){
          newDB.collectionNames(function(err, collectionNames){
            console.log("Delete collection: ");
            console.log(collectionNames);
            db.close();
          });
        });
    });
  });
});
