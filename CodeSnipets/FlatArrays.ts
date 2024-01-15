const arr = [2, [3, 4], [10, [5, 6], [6, 7, 8], [2, [34, 35, [18, 19]]]]]

let resultArray = []

const getFlattenArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object' && Array.isArray(arr)) {
            getFlattenArray(arr[i])
        } else {
            resultArray.push(arr[i])
        }
    }
    return resultArray
}

console.log(getFlattenArray(arr)) //[2,  3, 4, 10,  5,  6,  6,  7, 8,  2, 34, 35,18, 19]