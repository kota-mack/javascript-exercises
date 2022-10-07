const palindromes = function (input) {
    let str = input;
    const punctuationString = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const punctuationArray = Array.from(punctuationString);
    const palinArray = [];
    str = str.toLowerCase();
    for (s = 0; s < str.length; s++) {
        for (i = 0; i < punctuationArray.length; i++) {
            if (str[s] == punctuationArray[i]) {
                str = str.replace(str[s], "");
            } else {
                continue;
            }
        }

    }
    let newString = str.replace(/ /g, "");
    for (s = 0; s < newString.length; s++) {
        palinArray[s] = newString[s];
        }
    let originalPhrase = palinArray.join("");
    let reverseArray = palinArray.reverse();
    let reversePhrase = reverseArray.join("");
    //console.log("Original: ", originalPhrase);
    //console.log("Reverse: ", reversePhrase);
    if (reversePhrase === originalPhrase) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
