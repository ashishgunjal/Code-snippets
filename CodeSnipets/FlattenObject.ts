const object = {
    "alfa": "1",
    "beta": "2",
    "gamma": {
        "A": "1",
        "B": {
            "X": "5",
            "Y": {
                P: "1",
                Q: "2"
            }
        },
        "delta": [1, 2],
    }
}


const flattenObject = (object) => {
    let resultObj = {}
    for (const i in object) {
        if ((typeof object[i]) === 'object') {
            const temp = flattenObject(object[i]);
            for (const j in temp) {
                resultObj[i + '.' + j] = temp[j];
            }
        } else {

            resultObj[i] = object[i]

        }
    }
    return resultObj
}

console.log(flattenObject(object))

// [object Object] {
//     alfa: "1",
//     beta: "2",
//     gamma.A: "1",
//     gamma.B.X: "5",
//     gamma.B.Y.P: "1",
//     gamma.B.Y.Q: "2",
//     gamma.delta.0: 1,
//     gamma.delta.1: 2
//   }