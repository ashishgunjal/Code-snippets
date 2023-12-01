const promiseFirst = new Promise(function (resolve, reject) {
    reject('promiseFirst')
})

const promiseSecond = new Promise(function (resolve, reject) {
    resolve('promiseSecond')
})

const promiseThird = new Promise(function (resolve, reject) {
    reject('promiseThird')
})

const promiseFour = new Promise((resolve, reject) => {
    reject('4')
})


Promise.any([promiseFirst, promiseSecond]).then(response => {
    console.log("promise any 1", response)
}).catch(error => {
    console.log("error promise any 1", error.message)
})

Promise.any([promiseThird, promiseFour]).then(response => {
    console.log("promise any 2", response)
}).catch(error => {
    console.log("error promise any 2", error.message)
})