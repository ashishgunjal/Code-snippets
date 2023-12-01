const promiseFirst = new Promise(function (resolve, reject) {
    reject('promiseFirst')
})

const promiseSecond = new Promise(function (resolve, reject) {
    reject('promiseSecond')
})

const promiseThird = new Promise(function (resolve, reject) {
    reject('promiseThird')
})

const promiseFour = new Promise((resolve, reject) => {
    reject('4')
})

promiseSecond.then(resp => console.log(resp))


promiseFour.then(resp => console.log(resp)).catch(error => console.log(error))

Promise.any([promiseFirst, promiseSecond, promiseThird, promiseFour]).then(response => {
    console.log("promise any ", response)
}).catch(error => {
    console.log("error promise any ", error.message)
})