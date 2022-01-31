function stringReversal(str) {
    if (str.length <= 1) return str;
    return stringReversal(str.slice(1, str.length)) + str[0];
}

console.log('stringReversal', stringReversal('man'));