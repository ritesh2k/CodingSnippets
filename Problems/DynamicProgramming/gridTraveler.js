// grid traveler problem
// Given a grid of size m x n, how many ways can you travel from the top-left corner to the bottom-right corner?
// You can only move down or right at any point in time.
// Example:
// Input: m = 3, n = 2
// Output: 3
// Explanation: There are three ways to travel from the top-left corner to the bottom-right corner:
// 1. Down -> Down -> Right
// 2. Down -> Right -> Down
// 3. Right -> Down -> Down

// Approach:
// 1. Recursion
// 2. Memoization

function gridTraveler(m, n) {
    // base case
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    // recursive case
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

// Memoization
function gridTravelerMemoized(m, n, memo = {}) {
    // base case
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    // check if the result is already in the memo
    const key = m + ',' + n;
    if (key in memo) return memo[key];

    // recursive case
    memo[key] = gridTravelerMemoized(m - 1, n, memo) + gridTravelerMemoized(m, n - 1, memo);
    return memo[key];
}

//output
console.log(gridTraveler(3, 2)); // 3
console.log(gridTravelerMemoized(3, 2)); // 3
console.log(gridTravelerMemoized(18, 18)); // 2333606220
