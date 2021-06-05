const originalArray = [200, 12, 354, 123, 11, 3, 23, 3534, 12313, 112, -1]


const bubbleSort = (arr) => {
    const sortedArray = [...arr]
    for (let index = 0; index < arr.length; index++) {

        for (let compareIndex = 0; compareIndex < sortedArray.length - index - 1; compareIndex++) {
            if (sortedArray[compareIndex] > sortedArray[compareIndex + 1]) {
                let temp = sortedArray[compareIndex]
                sortedArray[compareIndex] = sortedArray[compareIndex + 1]
                sortedArray[compareIndex + 1] = temp
            }
        }

    }
    return sortedArray

}


console.log(`Sorted Array`, bubbleSort(originalArray))

