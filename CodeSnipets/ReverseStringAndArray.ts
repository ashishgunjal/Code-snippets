const str = "This is ashish";
var resultArray = [];
let reverseStr = str.split("").reverse().join("").replaceAll(",", "");
for (i in reverseStr) {
  resultArray.push(reverseStr[i]);
}
console.log(resultArray);

const array = ["c", "o", "d"];
let arrayToString = array.toString();
let reverseString = arrayToString.split(",").reverse().join();
console.log(reverseString);
