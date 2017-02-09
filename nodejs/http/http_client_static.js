var http = require('http')
var opitons = {
  hostname: 'localhost',
  port: '8080',
  path: '/index.html'
};
function handleResponse(response) {
  var serverData = '';
  response.on('data', function(chunk) {
    serverData += chunk;
  });
  response.on('end', function(){
    console.log(serverData);
  });
}
http.request(opitons, function(response){
  handleResponse(response);
}).end();
