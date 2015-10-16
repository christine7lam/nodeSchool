/**
 * Created by heipakchristine on 10/15/15.
 */
var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var fileloc = process.argv[3];

var server = http.createServer(function (req, res){

    //from answer: res.writeHead(200, {'content-type': 'text/plain'});
    var rstr = fs.createReadStream(fileloc);
    rstr.pipe(res);
});

server.listen(port);