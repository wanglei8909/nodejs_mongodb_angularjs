var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db){
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae){
    nebulae.find(function(err, items){
      items.toArray(function(err, itemArr){
        console.log("Before Delete :");
        console.log(itemArr);
        nebulae.remove({localtion:'北京'}, function(err, results){
          console.log("Delete" + results + "documents");
          nebulae.find(function(err, items){
            items.toArray(function(err, itemArr){
              console.log("Affter Delete :");
              console.log(itemArr);
              db.close();
            });
          });
        });
      });
    });
  });
});
