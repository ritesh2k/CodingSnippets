function decimalToBinary(number) {
    if (number === 1) return String(number);
    return decimalToBinary(Math.floor(number / 2)) + (number % 2);
}

console.log('decimalToBinary', decimalToBinary(7989));
