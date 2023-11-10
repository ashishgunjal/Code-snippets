//Callback is function that is passed to another function as a argument

//Predefined callback function
setTimeout(function () {
    console.log('setTimeout')
}, 1000)

//Custom callback function
function attendence() {
    console.log("attendance")
}

function student(attendence) {
    attendence()
}

student(attendence)
