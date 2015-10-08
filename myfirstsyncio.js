/**
 * Created by heipakchristine on 10/7/15.
 */

var fs = require("fs");
var test = null;
var body = null;

//console.log(process.argv[2]);

function getCont() {
    fs.readFile(process.argv[2], function callback(err, contents) {
       // console.log(contents.toString());
        body = contents.toString();
        test = body.split('\n');
        console.log(test.length-1);
    });
}
getCont();




