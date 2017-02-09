var http = require("http")
var options = {
  hostname: 'localhost',
  port: '8088',
};
function handleRespose(response) {
  var serverData = '';
  response.on('data', function (chunk) {
    serverData += chunk;
  });
  response.on('end', function () {
    console.log("相应状态码：",response.statusCode);
    console.log("相应头：",response.headers);
    console.log(serverData);
  });
}
http.request(options, function(response){
  handleRespose(response);
}).end();
