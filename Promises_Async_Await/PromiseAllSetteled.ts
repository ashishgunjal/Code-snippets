var promise1 = new Promise((resolve, reject) => resolve(3));
var promise2 = new Promise((resolve, reject) => setTimeout(reject, 'test', 100))


Promise.allSettled([promise1, promise2]).then(res => console.log(res)).catch(error => {
    console.log(error)
})