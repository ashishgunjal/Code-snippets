const promise1 = new Promise(function (resolve, reject) {
    reject("something2")
})

promise1.then((resp) => {
    console.log(resp)
}).catch((err) => {
    console.log(err)
})

console.log(promise1)


async function getData() {
    try {
        const resp = await promise1
        console.log(resp)
    }
    catch (error) {
        console.log(error)
    }
}

getData()