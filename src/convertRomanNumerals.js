export const convertRomanNumerals = (romanNumerals) => {
    let total = 0
    for (let i = 0; i < romanNumerals.length; i++) {
        const nextLetter = romanNumerals[i + 1]
        const currentNumber = convertSingleRomanNumeral(romanNumerals[i])
        if (nextLetter) {
            const nextNumber = convertSingleRomanNumeral(nextLetter)
            if (nextNumber <= currentNumber) {
                total += convertSingleRomanNumeral(romanNumerals[i])
            } else {
                total -= convertSingleRomanNumeral(romanNumerals[i])
            }
        } else {
            total += convertSingleRomanNumeral(romanNumerals[i])
        }
    }
    return total
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