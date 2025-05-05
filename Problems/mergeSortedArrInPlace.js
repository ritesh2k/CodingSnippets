/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    function multiply(arr) {
        console.log('got called', arr);
        return arr.reduce((acc, curr) => acc * curr, 1);
    }
    return nums.map((item, index, arr) => multiply(arr.toSpliced(index, 1)));
};

console.log(productExceptSelf([1, 2, 3, 4]));
