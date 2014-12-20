var http = require('http');
var through = require('through');

var server = http.createServer(function(req, res) {    
    if (req.method != 'POST') {
        res.writeHead(501);
        return res.end('send me a POST\n');
    }
    
    var tr = through(function write(data) {
        var upperCased = data.toString().toUpperCase();    
        this.queue(upperCased);
    });
    req.pipe(tr).pipe(res);
});
server.listen(process.argv[2]);
        