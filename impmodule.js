/**
 * Created by heipakchristine on 10/14/15.
 */

var path = require("path");
var mod = require('./module');

var dir = process.argv[2];
var ext = process.argv[3];

mod(dir, ext, function callback(err, data){
    data.forEach(function (file) {
        if (path.extname(file) === '.' + ext)
            console.log(file);
    });
});
