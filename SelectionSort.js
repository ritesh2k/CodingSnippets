
const originalArray = [200, 12, 354, 123, 11, 3, 23, 3534, 12313, 112, -1]

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

    }
    console.log(`originalArray`, originalArray)
}
insertionSort(originalArray)