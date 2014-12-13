var http = require('http');
var concatStream = require('concat-stream');
var url = process.argv[2];

http.get(url, function (response) {
    response.pipe(concatStream(function (data) {
        var lines = data.toString();
        console.log(lines.length);
        console.log(lines);
    }));
});
