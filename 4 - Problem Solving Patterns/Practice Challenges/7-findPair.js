// Frequency Counter / Multiple Pointer - findPair

// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// Examples
// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
// findPair([1,2,3], 0) // false

// Part 1 - solve this with the following requirements:

// - Time Complexity Requirement - O(n)
// - Space Complexity Requirement - O(n)

// Solution:
// Frequency Counter Pattern
function findPair(arr, n) {
    const freqCounter = {};
    const target = Math.abs(n);

    for (let num of arr) {
        freqCounter[num] = (freqCounter[num] || 0) + 1;
    }

    if (target === 0) {
        for (let key in freqCounter) {
            if (freqCounter[key] > 1) return true;
        }
        return false;
    }
    // console.log(freqCounter);
    for (let key in freqCounter) {
        let num = Number(key);
        // console.log(num, target, num+target);
        if (freqCounter[num + target]) {
            return true;
        }
    }
    return false;
}

// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
// console.log(findPair([4, -2, 3, 10], -6)); // true
// console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
// console.log(findPair([], 0)); // false
// console.log(findPair([5, 5], 0)); // true
// console.log(findPair([-4, 4], -8)); // true
// console.log(findPair([-4, 4], 8)); // true
// console.log(findPair([1, 3, 4, 6], -2)); // true
// console.log(findPair([0, 1, 3, 4, 6], -2)); // true
// console.log(findPair([1, 2, 3], 0)); // false

// Part 2 - solve this with the following requirements:

// - Time Complexity Requirement - O(n log n)
// - Space Complexity Requirement - O(1)

// Solution
// Multiple Pointer Pattern
function findPair2(arr, n) {
    arr.sort((a, b) => a - b); // O(n log n)

    const target = Math.abs(n);
    let i = 0;
    let j = 0;

    while (i < arr.length && j < arr.length) {
        let diff = arr[j] - arr[i];
        if (i !== j && diff === target) {
            return true;
        } else if (diff < target) {
            j++;
        } else {
            i++;
        }

        if (i === j) j++;
    }
    return false;
}

console.log(findPair2([6, 1, 4, 10, 2, 4], 2));
console.log(findPair2([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair2([4, -2, 3, 10], -6)); // true
console.log(findPair2([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair2([], 0)); // false
console.log(findPair2([5, 5], 0)); // true
console.log(findPair2([-4, 4], -8)); // true
console.log(findPair2([-4, 4], 8)); // true
console.log(findPair2([1, 3, 4, 6], -2)); // true
console.log(findPair2([0, 1, 3, 4, 6], -2)); // true
console.log(findPair2([1, 2, 3], 0)); // false
