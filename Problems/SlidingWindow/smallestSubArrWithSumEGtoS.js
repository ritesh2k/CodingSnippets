function smallestSubarrayWithSum(s, arr) {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // Expand the window

        // Shrink the window as small as possible while windowSum >= s
        while (windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Test

console.log(smallestSubarrayWithSum(7, [2, 1, 5, 2, 3, 2])); // Output: 2
