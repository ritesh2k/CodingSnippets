function maxSumSlidingWindow(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Add next element, remove first element of the window
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Test
console.log(maxSumSlidingWindow([2, 1, 5, 1, 3, 2], 3)); // Output: 9
