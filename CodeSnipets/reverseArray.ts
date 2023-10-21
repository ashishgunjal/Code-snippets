let input = [1, 5, 4, 7, [4, 5, 7], 5, 7, [7, 8, [5, 3, 7]], 2, 1]

const callReverseArray = (input1) => {
  const array: any = []
  for (let i = input1.length - 1; i >= 0; i--) {
    if (Array.isArray(input1[i])) {
      array.push(callReverseArray(input1[i]))
    } else {
      array.push(input1[i])
    }
  }
  return array
}


console.log(callReverseArray(input))

