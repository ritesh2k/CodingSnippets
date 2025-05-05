const originalArray = [200, 12, 354, 123, 11, 3, 23, 3534, 12313, 112, -1];

const bubbleSort = arr => {
    for (let index = 0; index < arr.length; index++) {
        for (let compareIndex = 0; compareIndex < arr.length - index - 1; compareIndex++) {
            // we decrease the camparision window by 1 as larger element will be bubbled to the end
            if (arr[compareIndex] > arr[compareIndex + 1]) {
                //if current element is larger than next, swap them
                let temp = arr[compareIndex];
                arr[compareIndex] = arr[compareIndex + 1];
                arr[compareIndex + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(`Sorted Array`, bubbleSort(originalArray));
