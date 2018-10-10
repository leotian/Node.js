var fs = require('fs');
var path = require('path');
require('./server.js');

// fs.readFile('./server.js', function (err, data) {
//   if (err) return console.log(err);
//   console.log(data);
// });

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))

console.log(path.join('/a', '/b'))
console.log(path.resolve('/a', '/b'))

console.log(path.join("a", "b1", "..", "b2"))
console.log(path.resolve("a", "b1", "..", "b2"))
