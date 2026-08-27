// Pure Recursion

// Collect all of the odd values in an array!

function collectOddValues(arr) {
    if (arr.length === 0) return 1;

    console.log(arr);

    if (arr[0] % 2 !== 0) {
        console.log(arr);
        return collectOddValues(arr.splice(1));
    }
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
