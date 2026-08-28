// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(num, exp) {
    let result = 1;
    if (exp < 1) return;
    result = num * power(num, exp - 1);
    console.log(result);
}

console.log(power(2, 3));
