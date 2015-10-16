/**
 * Created by heipakchristine on 10/14/15.
 */
var concatStream = require('concat-stream');
var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var urls = [url1, url2, url3];
var output = [];

//urls.forEach(function(url) {
setTimeout(function () {
    http.get(url1, function (res) {
        res.pipe(concatStream(function (data) {
            output.push(data);
        }));
    });
}, 1000);
//});
setTimeout(function () {
    http.get(url2, function (res) {
        res.pipe(concatStream(function (data) {
            output.push(data);
        }));
    });
}, 3000);

setTimeout(function () {
    http.get(url3, function (res) {
        res.pipe(concatStream(function (data) {
            output.push(data);
        }));
    });
}, 5000);


setTimeout(function () {
    output.forEach(function (o) {
        console.log(o.toString());
    });
}, 7000);




