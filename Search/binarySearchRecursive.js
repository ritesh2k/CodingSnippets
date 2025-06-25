var search = function (nums, target) {
    function binarySearch(nums, target, prevMid = null) {
        if (nums.length === 0) return -1;
        let mid = Math.floor(nums.length / 2);
        if (nums[mid] === target) return (prevMid ?? 0) + mid;
        if (nums[mid] < target) {
            nums = nums.slice(mid + 1);
        } else {
            nums = nums.slice(0, mid);
        }
        return binarySearch(nums, target, (prevMid ?? 0) + mid);
    }
    const result = binarySearch(nums, target);
    return result;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
