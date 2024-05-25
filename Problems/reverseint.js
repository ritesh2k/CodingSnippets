// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let absInput = Math.abs(n);
    let reverseInt = 0;
    while (absInput > 0) {
        let digit = absInput % 10;
        absInput = Math.floor(absInput / 10);
        reverseInt = reverseInt * 10 + digit;
    }
    return n < 0 ? reverseInt * -1 : reverseInt;
}

