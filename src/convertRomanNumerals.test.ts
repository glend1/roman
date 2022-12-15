import { convertRomanNumerals } from "./convertRomanNumerals";

describe.each([{romanNumeral: "I", number: 1},
        {romanNumeral: "V", number: 5},
        {romanNumeral: "X", number: 10},
        {romanNumeral: "L", number: 50},
        {romanNumeral: "D", number: 500},
        {romanNumeral: "M", number: 1000},
        {romanNumeral: "VI", number: 6},
        {romanNumeral: "IIII", number: 4},
        {romanNumeral: "DCLX", number: 660},
        {romanNumeral: "IV", number: 4},
        {romanNumeral: "IX", number: 9},
        {romanNumeral: "XL", number: 40},
        {romanNumeral: "CCCLXIX", number: 369},
        {romanNumeral: "MMDCCLI", number: 2751}])
    ("Basic Roman numeral tests", ({romanNumeral, number}) => {
        it(`Should convert ${romanNumeral} to ${number}`, () => {
            expect(convertRomanNumerals(romanNumeral)).toEqual(number)
        })
})
describe("Roman numeral edge cases", () => {
    //should make sure that input is a valid roman numeral for example IVX is invalid
    it("Should fail because H is not a roman numeral", () => {
        expect(() => convertRomanNumerals("H")).toThrow("Not a valid Roman Numeral")
    })
    it("Should convert the input to upper case", () => {
        expect(convertRomanNumerals("i")).toEqual(1)
    })
})
