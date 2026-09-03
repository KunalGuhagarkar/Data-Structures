// Bubble Sort

// Pseudocode
// - Start looping from with a variable called i the end of the array towards the beginning
// - Start an inner loop with a variable called j from the beginning until i - 1
// - If arr[j] is greater than arr[j+1], swap those two values!
// - Return the sorted array

// Solution

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // using ES15 syntax for swapping
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([5, 1, 3, 2, 4]));

// Traditional Approach (swapping)

function bubbleSort2(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Using traditional swapping syntax
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort2([5, 4, 3, 2, 1]));

// Optimization with noSwaps
function bubbleSort3(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // using ES15 syntax for swapping
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort3([5, 4, 3, 2, 1]));


// Exercise Solution:

function bubbleSort4(arr, comparator) {
    if (typeof comparator !== "function") {
        comparator = (a, b) => a - b;
    }

    let noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}
