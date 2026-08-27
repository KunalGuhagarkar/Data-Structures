// Factorial

// Example
// 5! -> 5 * 4 * 3 * 2 * 1

// Interative Approach

function factorial(num) {
    let fact = 1;
    for (let i = num; i > 1; i--) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(2));