var http = require('http');
var url = require('url');
var moment = require('moment');

var port = Number(process.argv[2]);

var server = http.createServer(requestListener);
server.listen(port);
console.log('Listening on port ' + port);            

var urlMatcher = /\/api\/([^\/?\s]+)/;
function requestListener(request, response) {
    var urlDetails = url.parse(request.url, true);
    var action = urlMatcher.exec(urlDetails.pathname)[1];
    
    var timeResponse = getTimeResult(action, urlDetails.query);
    if (timeResponse) {
        response.writeHead(200, {'Content-Type': 'application/json' });
        response.end(JSON.stringify(timeResponse));
    }
    else {
        response.writeHead(404);
        response.end();
    }    
}

function getTimeResult(action, query) {
    var json = {};
    var time = moment(query.iso);
    if (action === 'parsetime') {
        return {
            hour: time.hour(),
            minute: time.minute(),
            second: time.second()
        };
    }
    else if (action === 'unixtime') {
        return {
            unixtime: time.valueOf()
        }        
    }
    return null;
}
