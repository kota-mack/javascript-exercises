const reverseString = function(userInput) {
    const chars = [];
    for (i = 0; i < (userInput.length); i++) {
        chars[i] = userInput.substring(i, (i + 1));
    }
    const reverseChars = chars.reverse();
    //console.log(reverseChars);
    let output = "";
    for (i = 0; i < reverseChars.length; i++) {
        output = output.concat(reverseChars[i]);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
