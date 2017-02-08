function logCar(logMsg, callback) {
  process.nextTick(function(){
    callback(logMsg);
  });
}
var cars = ["法拉利", "保时捷", "布加迪"];
for (var idex in cars) {
  var msg = "Saw a" + cars[idex];
  logCar(msg, function(){
    console.log("Normal Callback: " + msg);
  })
}

for (var idx in cars) {
  var msg = "Saw a " + cars[idx];
  (function(msg){
    logCar(msg, function(){
      console.log("Closure Callback :" + msg);
    });
  })(msg);
}
