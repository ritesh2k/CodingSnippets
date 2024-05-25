// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunkContainer = [];
    //method 1
    // let index = 0;
    // while (index < array.length) {
    //     chunkContainer.push(array.slice(index, index + size));
    //     index += size;
    // }

    // method 2

    for (let index = 0; index < array.length; index++) {
        let chunk = chunkContainer[chunkContainer.length - 1];
        const element = array[index];
        if (chunk && chunk.length !== size) {
            chunk.push(element);
        } else {
            chunkContainer.push([element]);
        }
    }
    return chunkContainer;
}

console.log(chunk([1, 2, 2, 3, 4], 2));

