var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://wanglei:123456@localhost:27017/admin",{
  db: {w: 1, native_parser: false},
  server: {
    poolSize: 5,
    socketOptions: {connectTimeoutMS:500},
    autoReconnect: true,
  },
  replSet: {},
  mongos: {},
}, function(err, db){
  if(err){
    console.log(JSON.stringify(err));
  }else {
    console.log('Connected');
    db.createCollection("newCollection", function(err, collection){
      if (err) {
        console.log('collection didnot Created' + JSON.stringify(err));
      }else {
        console.log('collection Created!!!');
      }
    });
    db.logout(function (err, resul){
      if(!err){
        console.log('Logged out Via Connect String ...');
      }
      db.close();
      console.log('connection closed');
    });
  }
});
