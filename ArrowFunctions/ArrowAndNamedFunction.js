//Arrow functions are not hoisted. we cant call before declaration
//USECASE1
arrowFunctions()//ReferenceError: Cannot access 'arrowFunctions' before initialization

const arrowFunctions = () => {

}
//USECASE2
const arrowFunctions2 = () => {
    console.log("in function")//in function
}

arrowFunctions2()

//Arrow functions dont have its own this binding

//Arrow functions dont have argument bindings

function args() {
    console.log(arguments)
}

args(1, 2)

const argArrow = () => {
    console.log(arguments)
}

argArrow(1, 2)