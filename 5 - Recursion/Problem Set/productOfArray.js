// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// Examples
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length < 1) return 1;
    console.log(arr);
    return arr.shift() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
