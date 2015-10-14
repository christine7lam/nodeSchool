/**
 * Created by heipakchristine on 10/14/15.
 */

var concatStream = require('concat-stream');
var http = require('http');
var url = process.argv[2];

http.get(url, function (res) {
    res.pipe(concatStream(function(data) {
        console.log(data.length);
        console.log(data.toString());
    }));
});