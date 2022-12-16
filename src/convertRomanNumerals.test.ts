import { convertRomanNumerals } from "./convertRomanNumerals";

describe.each([{romanNumeral: "I", number: 1},
        {romanNumeral: "V", number: 5},
        {romanNumeral: "X", number: 10},
        {romanNumeral: "L", number: 50},
        {romanNumeral: "D", number: 500},
        {romanNumeral: "M", number: 1000},
        {romanNumeral: "VI", number: 6},
        {romanNumeral: "DCLX", number: 660},
        {romanNumeral: "IV", number: 4},
        {romanNumeral: "IX", number: 9},
        {romanNumeral: "XL", number: 40},
        {romanNumeral: "CCCLXIX", number: 369},
        {romanNumeral: "MMDCCLI", number: 2751}])
    ("Basic Roman numeral tests", ({romanNumeral, number}) =>
        it(`Should convert ${romanNumeral} to ${number}`, () => 
            expect(convertRomanNumerals(romanNumeral)).toEqual(number))
)
//TODO test functions seperately
describe.each(["IVX", "MDCCLIM", "DLXC"])
    ("Roman numeral order tests", romanNumeral =>
        it(`Should throw an error because ${romanNumeral} is not a valid Roman numeral`, () => 
        expect(() => convertRomanNumerals(romanNumeral)).toThrow("Not a valid Roman numeral order"))
)
describe("Roman numeral edge cases", () => {
    it("Should throw an error because H is not a Roman numeral", () => 
        expect(() => convertRomanNumerals("H")).toThrow("Not a valid Roman numeral character"))
    it("Should convert the input to upper case", () => 
        expect(convertRomanNumerals("i")).toEqual(1))
    it("Should thow an error if the string contains 4 sequential numbers", () => 
        expect(() => convertRomanNumerals("IIII")).toThrow("Contains 4 sequential letters"))
    it("Should trim inputs", () => 
        expect(convertRomanNumerals("      I         ")).toBe(1))
    it("Should trim multiline inputs", () => 
        expect(convertRomanNumerals(`      I       
          `)).toBe(1))
})
