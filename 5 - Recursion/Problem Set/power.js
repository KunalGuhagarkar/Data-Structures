// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(num, exp) {
    while (exp !== 0) {
        return num * power(num, exp - 1);
    }
}
