// Frequency Counter - findAllDuplicates

// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// Examples:
// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1

function findAllDuplicates(arr) {
    let freqCounter = {};

    for (let num of arr) {
        freqCounter[num] = (freqCounter[num] || 0) + 1;
    }
    console.log(freqCounter);

    for (let key of freqCounter) {
        console.log(key);
    }
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1]));