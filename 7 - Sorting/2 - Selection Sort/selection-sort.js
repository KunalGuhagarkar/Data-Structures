// Selection Sort

// Pseudocode
// - Store the first element as the smallest value you've seen so far.
// - Compare this item to the next item in the array until you find a smaller number.
// - If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// - If the "minimum" is not the value (index) you initially began with, swap the two values.
// - Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                min = arr[j + 1];
            }

            if (arr[i] !== min) {
                [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
            }
        }
    }
    console.log(min);
    return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
