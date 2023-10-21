let givenArray = [1, 5, 4, 7, [4, 5, 7], 5, 7, [7, 8, [5, 3, 7]], 2, 1]

const callReverseArray = (arrayValue) => {
  const array = []
  for (let i = arrayValue.length - 1; i >= 0; i--) {
    if (Array.isArray(arrayValue[i])) {
      array.push(callReverseArray(arrayValue[i]))
    } else {
      array.push(arrayValue[i])
    }
  }
  return array
}


console.log(callReverseArray(givenArray))

