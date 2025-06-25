function memoizedFib(n, memo = {}) {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;
    memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
    return memo[n];
}
// output
console.log(memoizedFib(1)); // 1
console.log(memoizedFib(2)); // 1
console.log(memoizedFib(3)); // 2
console.log(memoizedFib(4)); // 3
console.log(memoizedFib(5)); // 5
console.log(memoizedFib(6)); // 8
console.log(memoizedFib(7)); // 13
console.log(memoizedFib(8)); // 21
console.log(memoizedFib(9)); // 34
console.log(memoizedFib(10)); // 55
console.log(memoizedFib(11)); // 89
console.log(memoizedFib(12)); // 144
