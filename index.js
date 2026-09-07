// bubble sort

// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 noSwaps = false;
//             }
//         }
//         if (noSwaps) break;
//     }
//     return arr;
// }

// console.log(bubbleSort([5, 4, 3, 2, 1]));

// Selection Sort

function selectionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        console.log(i);
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
