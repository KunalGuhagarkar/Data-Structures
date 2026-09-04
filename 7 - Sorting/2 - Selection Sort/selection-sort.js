// Selection Sort

// Pseudocode
// - Store the first element as the smallest value you've seen so far.
// - Compare this item to the next item in the array until you find a smaller number.
// - If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// - If the "minimum" is not the value (index) you initially began with, swap the two values.
// - Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }

    return arr;
}

// console.log(selectionSort([5, 4, 3, 2, 1]));
// console.log(selectionSort([23, 8, 15, 4, 42, 16]));
console.log(selectionSort([34, 22, 10, 19, 17]));

// i = 0
// j   min
// 1   0
//     1

// 2   1
//     2

// 3   2
//     2

// 4   2
//     2

// in if
// i = 0 !== min = 2 // true
// swap arr[i] and arr[min]
