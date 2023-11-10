// Higher order function is a function that returns a function and take argument as a function

//Predefined Higher order function
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArray = array.filter(function (item) {
    return item > 3
})

console.log(newArray)

const resultArray = array.filter((item) => item)

console.log(resultArray)

//Custom Higher order function
function HOF(callBack) {
    console.log("HOF")
    callBack()
}


function callBack() {
    console.log("callBack")
}

HOF(callBack)