const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  console.log('request was made:' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
    myReadStream.pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('listing on port 3000...');
