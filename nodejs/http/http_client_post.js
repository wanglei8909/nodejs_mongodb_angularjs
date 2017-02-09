var http = require('http');
var options = {
  host: '127.0.0.1',
  path: '/',
  port: '6000',
  method: 'POST'
};
function readJSONResponse(respose) {
  var resposeData = '';
  respose.on('data',function (chunk) {
    resposeData += chunk;
  });
  respose.on('end',function() {
    var dataObj = JSON.parse(resposeData);
    console.log(dataObj);
  });
}
var req = http.request(options, readJSONResponse);
req.write('{"name":"wanglei","occupation":"burglar"}');
req.end();
