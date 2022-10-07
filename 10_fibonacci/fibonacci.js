const fibonacci = function(input) {
    //if negative return "OOPS"
    let n = 1;
    if (input < 1) {
        return "OOPS";
    } else {
        //use for loop to iterate fibonacci sequence up to and including specified number
        for (i = 0; i < input; i++) {
            n = (n - 1) + (n - 2);
        }
        //return nth number
        return n;
    }
};

console.log(fibonacci(4));
console.log(fibonacci(25));


// Do not edit below this line
module.exports = fibonacci;
