// insertion sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > currentVal) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([5,4,3,2,1]));

// Bubble Sort

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i < 1; i--) {
        noSwaps = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([5,4,3,2,1]));