var http = require('http');
var map = require('through2-map');

var port = Number(process.argv[2]);

var server = http.createServer(requestListener);
server.listen(port);
console.log('Listening on port ' + port);            

function requestListener(request, response) {
    console.log('Received ' + request.method + ' request');
    if (request.method != 'POST') {
        console.log('Only POST requests supported');
        response.statusCode = 501;
        return response.end();
    }
    
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);    
}
