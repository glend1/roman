import { convertRomanNumerals } from "./convertRomanNumerals";

describe("convertRomanNumerals", () => {
    it("Should convert I to 1", () => {
        expect(convertRomanNumerals("I")).toEqual(1)
    })
})