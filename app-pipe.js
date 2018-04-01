const fs = require('fs');
const myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
const myWtireStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.pipe(myWtireStream);
