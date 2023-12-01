const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
}).catch(error => console.log(error));
// Expected output: "two"



const _promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const _promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'two');
});

Promise.race([_promise1, _promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
}).catch(error => console.log(error));
// Expected output: "two"


