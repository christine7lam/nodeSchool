/**
 * Created by heipakchristine on 10/12/15.
 */
var fs = require("fs");
var path = require("path");

var dir = process.argv[2];
var ext = process.argv[3];

//console.log(ext);

fs.readdir(dir, function callback(err, files){
    files.forEach(function (file) {
        if(path.extname(file) === '.'+ext)
            console.log(file);
    });
});


