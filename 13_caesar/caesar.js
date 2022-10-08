const caesar = function(input, number) {
    const punctuationString = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const punctuationArray = Array.from(punctuationString);
    let toCode = [];
    const shiftFactor = Number(number);
    for (i = 0; i < input.length; i++) {
        for (p = 0; p < punctuationArray.length; p++) {
            if (input[i] == punctuationArray[p]) {
                toCode[i] = input[i];
            } else {
                continue;
            }
        }
        if (toCode[i] == input[i]) {
            continue;
        } else {
            toCode[i] = (input.charCodeAt(i) + shiftFactor);
        }
    }
    return toCode;
};

console.log(caesar("a,b! c", 4));

// Do not edit below this line
module.exports = caesar;
