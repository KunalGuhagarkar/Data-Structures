// Multiple Pointers Pattern

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Examples
// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

// Brute Force Solution:
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = arr.length-1; j >= 0; j--) {
            console.log(arr[i], arr[j]);
            if(arr[i] - arr[j] === 0) {
                
                return [arr[i], arr[j]];
            }
        }
    }
    return undefined;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3]));

console.log(-3 - (-3))