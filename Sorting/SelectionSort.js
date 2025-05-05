const originalArray = [200, 12, 354, 123, 11, 3, 23, 3534, 12313, 112, -1];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfmin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfmin] > arr[j]) {
                indexOfmin = j;
            }
        }
        if (i !== indexOfmin) {
            // if current index is not equal to index of min, swap the values
            let lesser = arr[indexOfmin];
            arr[indexOfmin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}
console.log(selectionSort(originalArray));
