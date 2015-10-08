/**
 * Created by heipakchristine on 10/7/15.
 */

var inputArray = process.argv;

//console.log(inputArray);
//console.log(inputArray.length);
var total = 0;

for(i = 2; i<inputArray.length; i++){
    total += parseInt(inputArray[i]);
}

console.log(total);
