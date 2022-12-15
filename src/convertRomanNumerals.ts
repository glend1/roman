export const convertRomanNumerals = (romanNumerals: string) => {
    let total = 0
    for (let i = 0; i < romanNumerals.length; i++) {
        try {
            isValidRomanNumeralOrder(i, romanNumerals)
            const currentNumber = convertSingleRomanNumeral(romanNumerals[i])
            const nextLetter = romanNumerals[i + 1]
            nextLetter ?
                (convertSingleRomanNumeral(nextLetter) <= currentNumber) ?
                    total += currentNumber :
                    total -= currentNumber
            : total += currentNumber
        } catch (err) { throw err }
    }
    return total
}

const convertSingleRomanNumeral = (romanNumeral: string) => {
    const number = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }[romanNumeral.toUpperCase()] || null
    if (number === null) { throw "Not a valid Roman numeral character" }
    return number
}

const isValidRomanNumeralOrder = (i: number, romanNumerals: string) => {
    const restOfString = romanNumerals.substring(i + 2)
    for (let j = 0; j < restOfString.length; j++) {
        if (convertSingleRomanNumeral(romanNumerals[i]) < convertSingleRomanNumeral(restOfString[j])) {
            throw "Not a valid Roman numeral order"
        }
    }
}