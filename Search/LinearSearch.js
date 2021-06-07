const originalArray = [200, 12, 354, 123, 11, 3, 23, 3534, 12313, 112, -1]

function linearSearch(arr, item) {
    for (let index = 0; index < arr.length; index++) {
        if (item === arr[index]) return index;
    }
    // return if item not found
    return -1
}

const result = linearSearch(originalArray, 3)
console.log(`result`, result)