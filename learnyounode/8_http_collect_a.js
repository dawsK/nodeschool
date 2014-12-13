var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
    var lines = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
        lines = lines + data;
    });
    response.on('end', function (data) {
        if (data) {
            lines = lines + data;
        }
        console.log(lines.length);
        console.log(lines);
    });
    response.on('error', console.error);
});
