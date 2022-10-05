const sumAll = function(a, b) {
    if (a < 0) {
        return "ERROR";
    } else if (b < 0) {
        return "ERROR";
    } else if (typeof(a) != 'number') {
        return "ERROR";
    } else if (typeof(b) != 'number') {
        return "ERROR";
    } else {
        let small;
        let large;
        let sum = 0
        if (a < b) {
            small = a;
            large = b;
        } else {
            small = b;
            large = a;
        }
        for (i = small; i <= large; i++) {
            sum = sum + i
        }
        return sum;
    }
};

console.log(sumAll(1, 4));
console.log(sumAll(1, -7));
console.log(sumAll("hey", 5));

// Do not edit below this line
module.exports = sumAll;
