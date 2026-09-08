// Bubble sort

function bubbleSort(arr) {
    let noSwap;
    for(let i = arr.length; i > 1; i-- ) {
        noSwap = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([5,3,2,1]));