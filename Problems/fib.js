// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // method 1 (iterative)
    // let fibArr = [0, 1];
    // for (let i = 2; i <= n; i++) {
    //     fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    // }
    // return fibArr[n];
    // method 2 (recursive)
    return fib(n - 1) + fib(n - 2);
}

