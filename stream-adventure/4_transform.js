var through = require('through');
var trStream = through(function (buf) {
    this.queue(buf.toString().toUpperCase());
});
process.stdin.pipe(trStream).pipe(process.stdout);
