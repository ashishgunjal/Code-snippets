
hoisting()
hoisting2() //Cannot access 'hoisting2' before initialization

const hoisting2 = () => {
    a = 10
    console.log(a) // 10
    var a
}

function hoisting() {
    a = 10
    console.log(a) // 10
    var a
}
