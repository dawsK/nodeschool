var split = require('split');
var through = require('through');

var lineNum = 1;
var caseStream = through(function (line) {
    if (lineNum % 2 === 0) {
        this.queue(line.toString().toUpperCase() + '\n');
    } else {
        this.queue(line.toString().toLowerCase() + '\n');
    }
    lineNum += 1;
});

process.stdin
    .pipe(split())
    .pipe(caseStream)
    .pipe(process.stdout);
