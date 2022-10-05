const removeFromArray = function(items, removeVariable) {
    const inputArray = Array.from(items);
    const output = [];
    for (i = 0; i < inputArray.length; i++) {
        for (a = 1; a < arguments.length; a++) {
            if (inputArray[i] === arguments[a]) {
                delete inputArray[i];
            } else{
                continue;
            }
        }
        if (inputArray [i] == undefined) {
            continue;
        } else {
            output.push(inputArray[i]);
        }
    }
    return output;
};


// Do not edit below this line
module.exports = removeFromArray;
