var fs = require('fs');
var content = fs.readFile(process.argv[2], 'utf8', function(err, data){        
    console.log(data.split('\n').length - 1);
});