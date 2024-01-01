const oldObject = {
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

function flattenObject(oldObject) {
    const newObject = {};

    flattenHelper(oldObject, newObject, '');

    return newObject;

    function flattenHelper(currentObject, newObject, previousKeyName) {
        for (let key in currentObject) {
            let value = currentObject[key];
            if (value.constructor !== Object) {
                if (previousKeyName == null || previousKeyName == '') {
                    newObject[key] = value;
                } else {
                    if (key == null || key == '') {
                        newObject[previousKeyName] = value;
                    } else {
                        newObject[previousKeyName + '.' + key] = value;
                    }
                }
            } else {
                if (previousKeyName == null || previousKeyName == '') {
                    flattenHelper(value, newObject, key);
                } else {
                    flattenHelper(value, newObject, previousKeyName + '.' + key);
                }
            }
        }
    }
}

console.log(flattenObject(oldObject))