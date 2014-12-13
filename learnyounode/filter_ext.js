var fs = require('fs');
var path = require('path');

function FilterExt(directory, ext, callback) {
    'use strict';
    
    fs.readdir(directory, function (err, files) {
        if (err){
            callback(err, null);
            return;
        }
        var matchingFiles = files.filter(function (file) { return path.extname(file).toLowerCase() === ('.' + ext); });
        callback(null, matchingFiles);
    });
}
module.exports = FilterExt;