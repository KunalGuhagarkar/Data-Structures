// bubble sort

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i-1; j++) {
            console.log(arr[j], arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
        console.log("PASS");
        console.log(arr);
    }

    return arr;
}

console.log(bubbleSort([1, 9, 8, 2, 7, 3, 6, 4, 5]));
