var combine = require('stream-combiner')
var through = require('through');

module.exports = function () {
    return combine(
        // read newline-separated json,
        // group books into genres,
        // then gzip the output
    )
}