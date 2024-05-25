// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let numberOfSpaces = n - 1;
    let hashes = '';
    for (let i = 0; i < n; i++) {
        let spaces = '';
        for (let j = 0; j < numberOfSpaces; j++) {
            spaces += ' ';
        }
        hashes += '#';
        console.log(spaces + hashes + spaces);
        hashes += '#';
        numberOfSpaces--;
    }
}

