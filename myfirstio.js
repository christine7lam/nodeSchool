/**
 * Created by heipakchristine on 10/7/15.
 */
var fs = require("fs");

var buffer = fs.readFileSync(process.argv[2]);

var test = buffer.toString();
var list = test.split('\n');

console.log(list.length-1);