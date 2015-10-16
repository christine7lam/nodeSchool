/**
 * Created by heipakchristine on 10/15/15.
 */
var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
    var param = url.parse(req.url, true).query;


    var date = new Date();

    var unitime = date.getTime();

    var timestr = param.iso.split("T");
    var time = timestr[1].split(".");
    var ft = time[0].split(":");

    var jsonString = {
        "hour": Number(ft[0]),
        "minute": Number(ft[1]),
        "second" : Number(ft[2])
    };

    var unixtime = {
        "unixtime": unitime
    };
    res.writeHead(200, {'Content-Type': 'application/json'});

   // console.log("URL: "+req.url);

    if(req.url.indexOf('/api/parsetime') >=0) {
        res.write(JSON.stringify(jsonString, null, 2));
    }

    if(req.url.indexOf('/api/unixtime') >=0){
        res.write(JSON.stringify(unixtime, null, 2));
    }
    res.end();
});

server.listen(port);





