
const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
  console.log('request was made:' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('listing on port 3000...');
