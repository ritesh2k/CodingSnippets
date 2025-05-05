// Given a string s consisting of digits, return the number of ways to decode it.
// The mapping is case-insensitive, and the input string may contain leading zeros.
// The input string is guaranteed to be a valid encoded message.
// The answer may be very large, so return it modulo 109 + 7.
//// Example 1:
// Input: s = "12"
// Output: 2
// Explanation: "12" can be mapped as "AB" (1 2) or "L" (12).

var numDecodings = function (s) {
    if (s[0] === '0') return 0; // If the string starts with '0', there are no valid decodings

    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Base case: an empty string has one way to decode it
    dp[1] = s[0] !== '0' ? 1 : 0; // If the first character is not '0', there's one way to decode it

    for (let i = 2; i <= n; i++) {
        const oneDigit = parseInt(s.slice(i - 1, i), 10);
        const twoDigits = parseInt(s.slice(i - 2, i), 10);

        // Check if the last one digit is valid (1-9)
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }

        // Check if the last two digits are valid (10-26)
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n] % (10 ** 9 + 7);
};

console.log(numDecodings('12')); // Output: 2
console.log(numDecodings('226')); // Output: 3
console.log(numDecodings('06')); // Output: 0
console.log(numDecodings('123456789')); // Output: 3
console.log(numDecodings('11106')); // Output: 2
console.log(numDecodings('1234567890')); // Output: 0
console.log(numDecodings('12345678901234567890')); // Output: 0
