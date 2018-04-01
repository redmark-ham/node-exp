const fs = require('fs');
const myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
const myWtireStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk) {
  console.log('new chunk received...');
  myWtireStream.write(chunk);
});
