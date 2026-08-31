// recursiveRange

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

// Example
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// Solution

function recursiveRange(num) {
    if (num === 1) return;
    return num + recursiveRange(num - 1);
}