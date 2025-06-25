const originalArray = [200, 12, 354, 123, 11, 3, 23, 3534, 12313, 112, -1];

const insertionSort = arr => {
    for (let index = 0; index < arr.length; index++) {
        const currentElement = arr[index];
        let sortedIndex = index;
        while (currentElement < arr[sortedIndex - 1] && sortedIndex > 0) {
            arr[sortedIndex] = arr[sortedIndex - 1];
            sortedIndex--;
        }
        arr[sortedIndex] = currentElement;
    }
    return arr;
};
const insertionSortOtherApproach = arr => {
    for (let i = 1; i < arr.length; i++) {
        //we start the loop at 1st index
        let numberToBeInserted = arr[i];
        let sortedIndex = i - 1; // assume that first element is sorted and then insert other element before or after it
        while (sortedIndex >= 0 && arr[sortedIndex] > numberToBeInserted) {
            arr[sortedIndex + 1] = arr[sortedIndex]; // shift the greater element of the sorted array to the right,
            //  to make space for the element to be inserted
            sortedIndex--;
        }
        arr[sortedIndex + 1] = numberToBeInserted; // we do j+1 because when condition fails j is pointing to the element lesser that current element
        // so we insert the current element to the right of j
    }
    return arr;
};

console.log(`insertionSort(originalArray)`, insertionSort(originalArray));
console.log(`insertionSortOtherApproach`, insertionSortOtherApproach(originalArray));
