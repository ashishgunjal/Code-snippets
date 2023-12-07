const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
//Expected output: Array[3, 42, "foo"]



const _promise1 = Promise.reject(3);
const _promise2 = 42;
const _promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([_promise1, _promise3]).then((values) => {
    console.log(values);
}).catch(error => console.log(error));
// Expected output: 3
