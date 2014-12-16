var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

var server = http.createServer(requestListener);
server.listen(port);
console.log('Listening on port ' + port);            

function requestListener(request, response) {
    console.log('Received ' + request.method + ' request');
    if (request.method != 'GET') {        
        response.statusCode = 501;
        return response.end(request.method + ' not supported');
    }
    
    
}
