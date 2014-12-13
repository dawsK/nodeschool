var args = process.argv.splice(2);
console.log(args.reduce(function (prev, curr) {
    return prev + parseInt(curr);
}, 0));
