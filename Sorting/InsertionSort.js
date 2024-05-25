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


console.log(`insertionSort(originalArray)`, insertionSort(originalArray))

