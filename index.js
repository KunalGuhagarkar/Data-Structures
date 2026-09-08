// Bubble sort

function bubbleSort(arr) {
    let noSwap;
    for (let i = arr.length; i > 1; i--) {
        noSwap = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([5, 3, 2, 1]));

// Selection Sort

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
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

console.log(selectionSort([5, 4, 3, 2, 1]));

// Insertion Sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
