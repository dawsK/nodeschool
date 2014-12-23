var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();
tr.pipe(process.stdout);

var uppercaser = through(function (buf) {
    this.queue(buf.toString().toUpperCase());
});

var loudStream = tr.select('.loud').createStream();
loudStream.pipe(uppercaser).pipe(loudStream);

process.stdin.pipe(tr);