var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db){
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae){
    nebulae.find(function(err, items){
      items.toArray(function(err, itemArr){
        console.log('Delete Before :');
        console.log(itemArr);
        nebulae.findAndRemove({update:"更新后"}, [['name', 1]], {w: 1}, function(err, results){
          console.log("Delete: \n" + results);
          nebulae.find(function(err, items){
            items.toArray(function(err, itemArr){
              console.log("Affter Delete:");
              console.log(itemArr);
              db.close();
            });
          });
        });
      });
    });
  });
});
