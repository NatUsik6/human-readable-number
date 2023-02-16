module.exports = function toReadable (number) {
    let stringNumber = number.toString().split('').reverse().join('');
    let zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                          'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let unitOfTens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
    let result = '';
    
    if (stringNumber.length > 1) {
        switch (stringNumber[1]) {
            case '0':
                result = stringNumber[0] == 0 ? '' : zeroToNineteen[+stringNumber[0]]
                break;
            case '1':
                result = zeroToNineteen[+(stringNumber[1] + stringNumber[0])];
                break;
            default:
                result = unitOfTens[+stringNumber[1]] + (stringNumber[0] == 0 ? '' : ' ' + zeroToNineteen[+stringNumber[0]]);
                break;
        }

        zeroToNineteen[5]

        if (stringNumber.length > 2) {
            result = zeroToNineteen[+stringNumber[2]] + ' hundred' + (result == '' ? '' : ' ' + result);
        }

        return result;
    } else {
        return zeroToNineteen[number]; 
    }
}
