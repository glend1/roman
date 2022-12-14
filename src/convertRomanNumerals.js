export const convertRomanNumerals = (romanNumerals) => {
    let currentValue = 0
    for (let i = 0; i < romanNumerals.length; i++) {
        romanNumerals[i + 1]
        currentValue += convertSingleRomanNumeral(romanNumerals[i])
    }
    return currentValue
}

const convertSingleRomanNumeral = (romanNumeral) => {
    switch (romanNumeral) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
    }
    return undefined
}

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000