var MongoClient = require('mongodb').MongoClient;
function addObject(collection, object){
  collection.insert(object, function(err, result){
    if (!err) {
      console.log("Inserted : ");
      console.log(result);
    }
  });
}
MongoClient.connect("mongodb://localhost/", function(err, db){
    var myDB = db.db("astro");
    myDB.dropCollection("nebulae");
    myDB.createCollection("nebulae", function(err, nebulae){
      addObject(nebulae, {ngc:"NGC 7293", name:"Helix",
    type:"planetary",localtion:"北京"});
      addObject(nebulae, {ngc:"NGC 7293", name:"Wanglei",
    type:"清纯",localtion:"西安"});
      addObject(nebulae, {ngc:"NGC 7293", name:"Xiaoming",
    type:"少妇",localtion:"上海"});
      addObject(nebulae, {ngc:"NGC 7293", name:"XiaoPan",
    type:"爷们",localtion:"成都"});
  });
  setTimeout(function(){db.close();}, 3000);
});
