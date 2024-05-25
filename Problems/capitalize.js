// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const sanitizedStr = str.trim();
    let capStr = sanitizedStr[0].toUpperCase();
    for (let i = 1; i < sanitizedStr.length; i++) {
        if (sanitizedStr[i - 1] === ' ') {
            capStr += sanitizedStr[i].toUpperCase();
        } else {
            capStr += sanitizedStr[i];
        }
    }
    return capStr;
}

