// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr.length - index - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfmin = i;
        for (let j = i + 1; j < arr.length; j++) {
            const element = arr[j];
            if (arr[indexOfmin] > element) {
                indexOfmin = j;
            }
        }
        if (i !== indexOfmin) {
            let lesser = arr[indexOfmin];
            arr[indexOfmin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const midPoint = Math.floor(arr.length / 2);
    const left = arr.slice(0, midPoint);
    const right = arr.slice(midPoint);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        const element = left[0] < right[0] ? left.shift() : right.shift();

        result.push(element);
    }
    result.push(...left, ...right); //TIL push returns the new length of the array
    return result;
}

