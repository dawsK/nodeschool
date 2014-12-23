var duplex = require('duplexer');
var through = require('through');

module.exports = function (counter) {
    var counts = {};
    var writer = through(function (obj) {            
            counts[obj.country] = counts[obj.country] || 0;
            counts[obj.country] += 1;            
        }, function () {
            counter.setCounts(counts);
        });
    return duplex(writer, counter);
};
