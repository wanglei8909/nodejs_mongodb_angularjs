var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db){
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae){
    nebulae.find({ngc:'NGC 7293'},function(err,items){
      items.toArray(function(err, itemArr){
        console.log('Before Modify :');
        console.log(itemArr);
        nebulae.findAndModify({ngc:'NGC 7293'}, [['name', 1]],
          {$set:{type:'Super nova', "UPdate": true}},
          {w:1,new:true}, function (err, doc){
            console.log("After Modify :");
            console.log(doc);
            db.close();
        });
      });
    })
  })
})
