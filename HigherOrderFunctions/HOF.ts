// Higher order function is a function that returns a function and take argument as a function

function HOF(callBack) {
    console.log("HOF")
    callBack()
}


function callBack() {
    console.log("callBack")
}

HOF(callBack)