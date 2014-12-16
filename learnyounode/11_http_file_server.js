var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var filePath = process.argv[3];

var server = http.createServer(requestListener);
server.listen(port);
console.log('Listening on port ' + port);            

function requestListener(request, response) {
    console.log('Received request');
    response.writeHead(200, {'content-type': 'text/plain' });
    var fileStream = fs.createReadStream(filePath);
    fileStream.pipe(response);
}
