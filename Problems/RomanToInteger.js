var romanToInt = function(s) {

    const mappings = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900

    }
    let integer = 0;
    for (let index = 0; index < s.length; index++) {
        let isPair = s[index] + s[index + 1]
        if (mappings[isPair]) {
            integer += mappings[isPair]
            index++
        } else {
            integer += mappings[s[index]]

        }
    }
    return integer
};

romanToInt("MCMXCIV")
