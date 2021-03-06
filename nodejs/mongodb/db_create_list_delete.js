var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/",function(err,db){
  var adminDB = db.admin();
  adminDB.listDatabases(function(err, databases) {
    console.log("Before Add Database List: ");
    console.log(databases);
  });

  var newDB = db.db("newDB");
  newDB.createCollection("newCollection", function(err, collection){
    if (!err) {
      console.log("New Database and Collection Created");
      adminDB.listDatabases(function (err, databases){
        console.log("After Add Database List: ");
        console.log(databases);
        // db.db("newDB").dropDatabase(function (err, results){
        //   if (!err) {
        //     console.log("Database dropped:");
        //     setTimeout(function(){
        //       adminDB.listDatabase(function(err, results){
        //         var found = false;
        //         for (var i = 0; i < results.databases.length; i++) {
        //           if (results.databases[i].name == "newDB") {
        //             found = true;
        //           }
        //         }
        //         db.close();
        //       });
        //     }, 15000);
        //   }
        // });
        db.close();
      });
    }
  });
});
