function convertToRoman(input) {

    const powersOfTen = {
        1: 'I',
        10: 'X',
        100: 'C',
        1000: 'M'
    }

    const numerals = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }

    for (const power in powersOfTen) {
        if ((input % power === 0) && input <= (3 * power))
            return powersOfTen[power].repeat(input / power);
    }

    for (const index in numerals) {
        if (input === index - 1)
            return 'I' + numerals[index]
    }
    
    return numerals[input];
}

export default convertToRoman;