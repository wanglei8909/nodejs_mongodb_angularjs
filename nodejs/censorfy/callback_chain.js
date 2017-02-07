function logCar(car, callback){

  if(car.length){
    process.nextTick(function(){
      callback();
    });
  }
  console.log("Saw a %s", car);
}
function logCars(cars){
  var car = cars.pop();
  logCar(car, function(){
    logCars(cars);
  });
}

var cars = ["法拉利", "保时捷", "布加迪", "兰博基尼", "阿斯顿马丁"];
logCars(cars);
