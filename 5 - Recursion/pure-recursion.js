// Pure Recursion

// Collect all of the odd values in an array!

function collectOddValues(arr) {
    if (arr.length === 0) return;

    console.log(arr);
    const result = [];

    if (arr[0] % 2 !== 0) {
        result.push(arr[0])
    }
    return collectOddValues(arr.splice(1));
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
