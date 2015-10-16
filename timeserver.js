/**
 * Created by heipakchristine on 10/15/15.
 */
var net = require('net');
var port = process.argv[2];

function comp(input){
    var output = input;
    if(input < 10)
        output = "0"+ input;

    return output;
}
var server = net.createServer(function (socket) {
      var date = new Date();
      var fulldate = date.getFullYear()+"-"+comp(date.getMonth()+1)+"-"+comp(date.getDate())+" "+comp(date.getHours())+":"+comp(date.getMinutes());
    //console.log(fulldate);
      socket.write(fulldate);
      socket.end(date);
});
server.listen(port);