// Merge Sort

// Merging Arrays

// - Create an empty array, take a look at the smallest values in each input array
// - While there are still values we haven't looked at...
// - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// - Once we exhaust one array, push in all remaining values from the other array

function mergingArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr1.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else if (arr2[j] < arr1[i]) {
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}

console.log(mergingArrays([1, 10, 50], [2, 14, 99, 100]));
