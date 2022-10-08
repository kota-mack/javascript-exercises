const caesar = function(input, shift) {
    const punctuationString = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const punctuationArray = Array.from(punctuationString);
    let toCode = [];
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
            toCode[i] = input.charCodeAt(i);
        }
    }
    return toCode;
};

console.log(caesar("a,b! c"));

// Do not edit below this line
module.exports = caesar;
