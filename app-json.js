const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  console.log('request was made:' + req.url);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const myObject = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  res.end(JSON.stringify(myObject));
});

server.listen(3000, '127.0.0.1');
console.log('listing on port 3000...');
