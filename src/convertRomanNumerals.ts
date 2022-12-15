export const convertRomanNumerals = (romanNumerals: string) => {
    let total = 0
    for (let i = 0; i < romanNumerals.length; i++) {
        try {
            const currentNumber = convertSingleRomanNumeral(romanNumerals[i])
            const nextLetter = romanNumerals[i + 1]
            nextLetter ?
                (convertSingleRomanNumeral(nextLetter) <= currentNumber) ?
                    total += currentNumber :
                    total -= currentNumber
            : total += currentNumber
        } catch (err) { return err }
    }
    return total
}

const convertSingleRomanNumeral = (romanNumeral: string) => {
    const number = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }[romanNumeral.toUpperCase()] || null
    if (number === null) { throw "Not a valid Roman Numeral" }
    return number
}