var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('you have been kicked from the team');
});
server.listen(4000);