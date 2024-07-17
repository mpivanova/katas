// Both Jest and Mocha are available for use.
import convertToRoman from '../src/index.js';
import { expect } from 'chai';

describe('convertToRoman', () => {

    const fundamentalNumerals = [
        { input: 1, result: 'I' },
        { input: 5, result: 'V' },
        { input: 10, result: 'X' },
        { input: 50, result: 'L' },
        { input: 100, result: 'C' },
        { input: 500, result: 'D' },
        { input: 1000, result: 'M' },
    ]

    fundamentalNumerals.forEach(x => {
        it(`should return ${x.result} for ${x.input}`, () => {
            expect(convertToRoman(x.input)).to.equal(x.result);
        });
    });

    const multiples = [
        { input: 2, result: 'II' },
        { input: 3, result: 'III' },
        { input: 20, result: 'XX' },
        { input: 30, result: 'XXX' },
        { input: 200, result: 'CC' },
        { input: 300, result: 'CCC' },
        { input: 2000, result: 'MM' },
        { input: 3000, result: 'MMM' },
    ]

    multiples.forEach(x => {
        it(`should return ${x.result} for ${x.input}`, () => {
            expect(convertToRoman(x.input)).to.equal(x.result);
        });
    });

    const subtractables = [
        { input: 4, result: 'IV' },
        { input: 9, result: 'IX' }
    ]

    subtractables.forEach(x => {
        it(`should return ${x.result} for ${x.input}`, () => {
            expect(convertToRoman(x.input)).to.equal(x.result);
        });
    });

});

export default {};