var fe = require('./filter_ext.js');

var directory = process.argv[2];
var ext = process.argv[3];
fe(directory, ext, function (err, data) {
    if (err) {
        console.log("Encountered an error: " + err);
        return;
    }
    console.log(data.join('\n'));
});