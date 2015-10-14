var fs = require("fs");
var path = require("path");

module.exports = function(dir, ext, callback) {
    var data = [];

    fs.readdir(dir, function (err, files) {
        if(err)
            return callback(err);

        files.forEach(function (file) {
            if (path.extname(file) === '.' + ext)
                //console.log(file);
            data.push(file);
        });
       // console.log(data.length);
        return callback(null, data);
    });
};