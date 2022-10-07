const fibonacci = function(input) {
    //if negative return "OOPS"
    let n = input;
    if (n < 1) {
        return "OOPS";
    } else {
        let Phi = ((1 + (Math.sqrt(5)))/2);
        let phi = ((1 - (Math.sqrt(5)))/2);
        n = (((Phi**n) - (phi)**n)/(Math.sqrt(5)));
        n = Math.round(n);
        return n;
    }
};

console.log(fibonacci(4));
console.log(fibonacci(25));


// Do not edit below this line
module.exports = fibonacci;
