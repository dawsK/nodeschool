var http = require('http');
var concatStream = require('concat-stream');
var urls = process.argv.slice(2);
var results = {};
urls.forEach(function (url, num) {
    http.get(url, function (response) {
        response.pipe(concatStream(function (data) {
            results[url] = data.toString();
            if (Object.keys(results).length == urls.length) {
                urls.forEach(function (url) { console.log(results[url]); });
            }
        }));
    });
});
