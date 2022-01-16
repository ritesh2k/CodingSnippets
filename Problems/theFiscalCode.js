// Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

// Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

//     Generate 3 capital letters from the surname, if it has:
//         At least 3 consonants then the first three consonants are used. (Newman -> NWM).
//         Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
//         Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).

//     Generate 3 capital letters from the name, if it has:
//         Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
//         More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
//         Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
//         Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).

//     Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:
//         Take the last two digits of the year of birth (1985 -> 85).
//         Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
//         For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
//         For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).

// Examples

// fiscalCode({
//   name: "Matt",
//   surname: "Edabit",
//   gender: "M",
//   dob: "1/1/1900"
// }) ➞ "DBTMTT00A01"

// fiscalCode({
//   name: "Helen",
//   surname: "Yu",
//   gender: "F",
//   dob: "1/12/1950"
// }) ➞ "YUXHLN50T41"

// fiscalCode({
//   name: "Mickey",
//   surname: "Mouse",
//   gender: "M",
//   dob: "16/1/1928"
// }) ➞ "MSOMKY28A16"

// Notes

//     Code letters must be uppercase.
//     Date of birth is given in D/M/YYYY format.
//     The conversion table for months is already in the starting code.
//     Y is not a vowel.

const months = { 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'H', 7: 'L', 8: 'M', 9: 'P', 10: 'R', 11: 'S', 12: 'T' };

const sirNameHandler = (fname) => {
    let firstThreeCharacter = '';

    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'u', 'U', 'o', 'O'];
    const consonants = fname.split('').filter((item) => !vowels.includes(item));
    const vowelsInName = fname.split('').filter((item) => vowels.includes(item));
    firstThreeCharacter = consonants.slice(0, 3).join('');

    if (firstThreeCharacter.length < 3) {
        firstThreeCharacter += vowelsInName.slice(0, 3 - firstThreeCharacter.length).join('');
    }
    if (firstThreeCharacter.length < 3) {
        firstThreeCharacter += Array(3 - firstThreeCharacter.length)
            .fill('x')
            .join('');
    }
    return firstThreeCharacter;
};

const firstNameHandler = (fname) => {
    let firstThreeCharacter = '';

    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'u', 'U', 'o', 'O'];
    const consonants = fname.split('').filter((item) => !vowels.includes(item));
    const vowelsInName = fname.split('').filter((item) => vowels.includes(item));
    if (consonants.length > 3) {
        firstThreeCharacter = `${consonants[0]}${consonants[2]}${consonants[3]}`;
        return firstThreeCharacter;
    }
    firstThreeCharacter = consonants.slice(0, 3).join('');

    if (firstThreeCharacter.length < 3) {
        firstThreeCharacter += vowelsInName.slice(0, 3 - firstThreeCharacter.length).join('');
    }
    if (firstThreeCharacter.length < 3) {
        firstThreeCharacter += Array(3 - firstThreeCharacter.length)
            .fill('x')
            .join('');
    }
    return firstThreeCharacter;
};

const birthAndGenderHandler = (dob, gender) => {
    let lastFiveChars = '';
    lastFiveChars = dob.slice(-2);
    // formatting date manually to handle dd/mm/yyyy (default is mm/dd/yyyy)
    const dateParts = dob.split('/');
    const birth = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    lastFiveChars += months[birth.getMonth() + 1];
    const day = birth.getDate();
    if (gender === 'M') {
        lastFiveChars += day < 10 ? `0${day}` : day;
    } else {
        lastFiveChars += day + 40;
    }
    return lastFiveChars;
};

const theFiscalCode = (user) => {
    const firstThreeChars = sirNameHandler(user.surname);
    const nextThreeChars = firstNameHandler(user.name);
    const lastFiveChars = birthAndGenderHandler(user.dob, user.gender);
    const fiscalCode = firstThreeChars + nextThreeChars + lastFiveChars;
    console.log(`fiscalCode`, fiscalCode.toUpperCase());
};

const person1 = {
    name: 'Matt',
    surname: 'Edabit',
    gender: 'M',
    dob: '1/1/1900'
};

const person2 = {
    name: 'Helen',
    surname: 'Yu',
    gender: 'F',
    dob: '1/12/1950'
};

const person3 = {
    name: 'Mickey',
    surname: 'Mouse',
    gender: 'M',
    dob: '16/1/1928'
};

theFiscalCode(person1);
theFiscalCode(person2);
theFiscalCode(person3);
