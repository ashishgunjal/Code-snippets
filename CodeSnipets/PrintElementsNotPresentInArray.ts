// Given an array containing n distinct numbers taken from the range 0 to 10, find that is missing.

let givenArray = [8, 8, 5, 4, 2, 9, 2, 6]
let resultArray = []
for (let i = 0; i <= 10; i++) {
    if (!givenArray.includes(i)) {
        resultArray.push(i)
    }

}

console.log(resultArray)