const str = "Ashish"
var resultStr = ""
const reverseStr = (str) => {
    for (let i = str.length - 1; i > -1; i--) {
        resultStr = resultStr + str[i]
    }
    return resultStr
}

console.log(reverseStr(str)) //"hsihsA"

