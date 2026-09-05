// bubble sort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        console.log("PASS");
        console.log(arr);
    }

    return arr;
}

console.log(bubbleSort([1, 9, 8, 2, 7, 3, 6, 4, 5]));
