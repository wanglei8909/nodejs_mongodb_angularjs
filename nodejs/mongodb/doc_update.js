var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/",function(err, db){
  var myDB = db.db("astro");
  myDB.collection("nebulae",function(err, nebulae){
    nebulae.find({type:'少妇'}, function(err, items){
      items.toArray(function(err, itemArr){
        console.log("Before Update:");
        console.log(itemArr);
        nebulae.update({ngc:'NGC 7293', $isolated:1},
                       {$set:{type:'少妇', update: "更新后"}},
                       {upsert:false, multi:true, w:1},
                     function(err, results){
                       nebulae.find({type: "少妇"}, function(err, items){
                         items.toArray(function(err, itemArr){
                           console.log("Affter Update:");
                           console.log(itemArr);
                           db.close();
                         });
                       });
                     });
      });
    });
  });
});
