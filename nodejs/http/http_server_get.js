var http = require('http');
var message = ['Hello world', 'Form a basic Node.js server', '����'];
http.createServer(function (req, res) {
  // res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.write('<html><head><title>Simple HTTP Server</title></head>');
  res.write('</body>');
  for (var idx in message){
    res.write('\n<h1>' + message[idx] + '</h1>');
  }
  res.end('\n</body></html>');
}).listen(8089);
