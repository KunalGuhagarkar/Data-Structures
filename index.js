// Bubble Sort

function bubbleSort(arr) {
    let stopSwap;
    for (let i = arr.length; i > 0; i--) {
        stopSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                stopSwap = false;
            }
        }
        if (stopSwap) break;
    }
    return arr;
}

console.log(bubbleSort([5,4,3,2,1]));