//check if a number is palindrome without using string methods
var isPalindrome = function (x) {
    let originalNum = x;
    if (x < 0) return false;
    let reverseNum = 0;
    let multiplier = 10;
    while (originalNum > 0) {
        reverseNum = reverseNum * multiplier + (originalNum % 10);
        //multiplier *= 10;
        originalNum = Math.floor(originalNum / 10);
    }

    return reverseNum === x;
};

isPalindrome(120021);
