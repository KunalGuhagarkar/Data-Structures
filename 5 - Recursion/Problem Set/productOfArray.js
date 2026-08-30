// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// Examples
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// Solution

// Time Complexity -> O(n^2)
function productOfArray(arr) {
    if (arr.length < 1) return 1;
    return arr.shift() * productOfArray(arr);
}

// Time Complexity -> O(n)
function productOfArray2(arr, index=0) {
    // if (index == arr.length) return;
    console.log(index);
    return arr[index] * productOfArray2[arr, index + 1]; 
}

console.log(productOfArray2([1, 2, 3]));
console.log(productOfArray2([1, 2, 3, 10]));
