var net = require('net');
var moment = require('moment');
var port = process.argv[2];
var server = net.createServer(function (socket) {
    var dateString = moment().format("YYYY-MM-DD HH:mm");    
    socket.write(dateString);
    socket.end('\n');
});
server.listen(port);
