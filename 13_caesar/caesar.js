const caesar = function(input, number) {
    const punctuationString = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const punctuationArray = Array.from(punctuationString);
    let toCode = [];
    if (number < 0) {
        number = number + 26;
    } else {
        number = number
    }
    if (number > 26) {
        number = (number % 26);
    } else {
        number = number;
    }
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
            toCode[i] = input.charCodeAt(i);
            continue;
        } else {
            if (input.charCodeAt(i) < 91) {
                if ((input.charCodeAt(i) + shiftFactor) > 90) {
                    toCode[i] = (input.charCodeAt(i) + shiftFactor - 26);
                } else {
                    toCode[i] = (input.charCodeAt(i) + shiftFactor);
                }
            } else {
                if ((input.charCodeAt(i) + shiftFactor) > 122) {
                    toCode[i] = (input.charCodeAt(i) + shiftFactor- 26);
                } else {
                    toCode[i] = (input.charCodeAt(i) + shiftFactor);
                }
            }
        }
    }
    let codedChars = [];
    for (i = 0; i < toCode.length; i++) {
        codedChars[i] = String.fromCharCode(toCode[i]);
    }
    return codedChars.join("");
};

// Do not edit below this line
module.exports = caesar;
