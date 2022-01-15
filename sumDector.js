// Write a function that ret

// Returns all sets of three elements that sum to 0.
// Examples
// threeSum([0, 1, -1, -1, 2]) ➞[[0, 1, -1], [-1, -1, 2]]
// threeSum([0, 0, 0, 5, -5]) ➞[[0, 0, 0], [0, 5, -5]]
// threeSum([1, 2, 3]) ➞[]
// threeSum([1]) ➞[]

// Notes
//     The original array may contain duplicate numbers.
//     Each three - element subarray in your output should be distinct.
//     Subarrays should be ordered by the first element of the subarray.
//     Subarrays themselves should be ordered the same as the original array.
//     Return an empty array if no three elements sum to zero.
//     Return an empty array if there are fewer than three elements.

const sumDetector = (arr) => {
    const elementsArray = [];
    if (arr.length < 3) return elementsArray;

    for (let index = 0; index < arr.length; index++) {
        let subArr = arr.slice(index, index + 3);

        if (subArr.length < 3) break;
        const total = subArr.reduce((acc, curr) => acc + curr, 0);
        if (total === 0) elementsArray.push(subArr);
    }

    return elementsArray;
};
console.log(sumDetector([0, 0, 0, 5, -5]));
