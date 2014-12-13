var fs = require('fs');
var path = require('path');                   

var directory = process.argv[2];
var ext = '.' + process.argv[3];
fs.readdir(directory, function (err, files) {
    var matchingFiles = files.filter(function (file) { return path.extname(file).toLowerCase() === ext; });
    console.log(matchingFiles.join('\n'));
});