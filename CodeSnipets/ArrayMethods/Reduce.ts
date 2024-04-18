const array = [1, 2, 3, 4, 6, 8];
const result = array.reduce((acc, item) => {
  return acc * item;
}, 1);

console.log(result);
