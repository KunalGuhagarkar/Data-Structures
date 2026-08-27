// Factorial

// Example
// 5! -> 5 * 4 * 3 * 2 * 1

// Interative Approach

// function factorial(num) {
//     if (num < 0) return undefined;
//     let total = 1;
//     for (let i = num; i > 1; i--) {
//         total *= i;
//     }
//     return total;
// }

// Recursive Approach

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5));
