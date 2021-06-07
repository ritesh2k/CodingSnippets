const originalArray = [200, 12, 354, 123, 11, 3, 23, 3534, 12313, 112, -1]

const insertionSort = (arr) => {
    const sortedArray = [...arr]
    for (let index = 0; index < arr.length; index++) {
        const currentElement = sortedArray[index];
        let sortedIndex = index
        while (currentElement < sortedArray[sortedIndex - 1] && sortedIndex > 0) {
            sortedArray[sortedIndex] = sortedArray[sortedIndex - 1]
            sortedIndex--
        }
        sortedArray[sortedIndex] = currentElement

    }
    return sortedArray

}

const sortedArr = insertionSort(originalArray)

const binarySearch = (arr, low, high, item) => {
    if (high >= low) {
        let mid = low + Math.floor(high - low / 2)
        if (item === arr[mid])
            return mid
        if (item > arr[mid])
            return binarySearch(arr, mid + 1, high, item)
        if (item < arr[mid])
            return binarySearch(arr, low, mid - 1, item)
    }
    return -1
}
console.log(`sortedArr`, sortedArr)
console.log(`item ${23} is at index`, binarySearch(sortedArr, 0, sortedArr.length - 1, 23))