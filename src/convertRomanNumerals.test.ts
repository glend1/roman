import { convertRomanNumerals } from "./convertRomanNumerals";

describe("convertRomanNumerals", () => {
    //should make sure that input is a valid roman numeral for example IVX is invalid
    it("Should convert I to 1", () => {
        expect(convertRomanNumerals("I")).toEqual(1)
    })
    it("Should convert V to 5", () => {
        expect(convertRomanNumerals("V")).toEqual(5)
    })
    it("Should convert X to 10", () => {
        expect(convertRomanNumerals("X")).toEqual(10)
    })
    it("Should convert L to 50", () => {
        expect(convertRomanNumerals("L")).toEqual(50)
    })
    it("Should convert D to 500", () => {
        expect(convertRomanNumerals("D")).toEqual(500)
    })
    it("Should convert M to 1000", () => {
        expect(convertRomanNumerals("M")).toEqual(1000)
    })
    it("Should convert VI to 6", () => {
        expect(convertRomanNumerals("VI")).toEqual(6)
    })
    it("Should convert IIII to 4", () => {
        expect(convertRomanNumerals("IIII")).toEqual(4)
    })
    it("Should convert DCLX to 660", () => {
        expect(convertRomanNumerals("DCLX")).toEqual(660)
    })
    it("Should convert IV to 4", () => {
        expect(convertRomanNumerals("IV")).toEqual(4)
    })
    it("Should convert IX to 9", () => {
        expect(convertRomanNumerals("IX")).toEqual(9)
    })
    it("Should convert XL to 40", () => {
        expect(convertRomanNumerals("XL")).toEqual(40)
    })
    it("Should convert CCCLXIX to 369", () => {
        expect(convertRomanNumerals("CCCLXIX")).toEqual(369)
    })
    it("Should convert MMDCCLI to 2751", () => {
        expect(convertRomanNumerals("MMDCCLI")).toEqual(2751)
    })
    it("Should fail because H is not a roman numeral", () => {
        expect(convertRomanNumerals("H")).toEqual("Not a valid Roman Numeral")
    })
    it("Should convert the input to upper case", () => {
        expect(convertRomanNumerals("i")).toEqual(1)
    })
})