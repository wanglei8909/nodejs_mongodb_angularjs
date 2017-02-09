var fs = require('fs');
var http = require('http');
var url = require('url')
var ROOT_DIR = "html";
http.createServer(function(req, res){
  var urlObj = url.parse(req.url, true, false);
  fs.readFile(ROOT_DIR + urlObj.pathname, function(err, data) {
    if(err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      console.log('writeHead(404)');
      console.log(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
    console.log('writeHead(200)');
  });
}).listen(8080);
