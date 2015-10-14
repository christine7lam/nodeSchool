/**
 * Created by heipakchristine on 10/14/15.
 */
var url = process.argv[2];
var http = require('http');

http.get(url, function callback (res) {
    //res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log(data.toString());
    });
});
