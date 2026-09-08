// bubble sort

function bubbleSort(arr) {
    let noSwaps;

    for (let i = arr.length; i > 1; i--) {
        noSwaps = true;
        for (let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    
    return arr;
}

console.log(bubbleSort([5,3,2,1]));

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

console.log(selectionSort([5,4,3,2,1]));