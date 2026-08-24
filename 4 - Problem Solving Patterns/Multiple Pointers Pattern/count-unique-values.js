// Implement a function called **countUniqueValues,** which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Example
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr) {
    let start = 0;
    let start_plus = 1;
    let count = 0;
    while (start_plus < arr.length-1) {
        console.log(arr[start], arr[start_plus]);
        if (arr[start] === arr[start_plus]) {
            start_plus++;
        } else {
            count++
        }
    }
    return count;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
