// Pure Recursion

// Collect all of the odd values in an array!

function collectOddValues(arr) {
    if (arr.length === 0) return;

    if (arr[arr.length - 1] % 2 !== 0) {
        return collectOddValues(arr.splice(arr.length - 1));
    }
}

collectOddValues([1, 2, 3, 4, 5]);
