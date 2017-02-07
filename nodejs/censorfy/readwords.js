var censor = require("./censortext");
var str = "breaker";
process.nextTick(function() {
  console.log("im nextTick");
});
console.log(censor.getCensoredWords());
console.log(str);
