// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    function charMapMaker(string) {
        // let charMap = {};
        for (const char of string) {
            if (this[char]) {
                this[char] += 1;
            } else {
                this[char] = 1;
            }
        }
        // return charMap;
    }
    // using new constructor method
    const charMapA = new charMapMaker(stringA);
    const charMapB = new charMapMaker(stringB);
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }
    for (const key in charMapA) {
        if (charMapA[key] !== charMapB[key]) return false;
    }
    return true;
}

