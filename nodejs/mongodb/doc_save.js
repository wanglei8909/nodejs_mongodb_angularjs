var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db){
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae){
    nebulae.findOne({type:"Super nova"}, function(err, item){
      console.log("Before Save : ");
      console.log(item);
      item.info = "Some New Info two";
      item.other = "Some New Other";
      nebulae.save(item, {w: 1}, function(err, results){
        if (err) {
          console.log(JSON.stringfy(err));
        }
        nebulae.findOne({type:"Super nova"}, function(err, savedItem){
          console.log("After Save:");
          console.log(savedItem);
          db.close();
        });
      });
    });
  });
});
