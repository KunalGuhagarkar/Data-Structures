// Merge Sort

// Pseudocode
// - Break up the array into halves until you have arrays that are empty or have one element
// - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// - Once the array has been merged back together, return the merged (and sorted!) array

// Solution
import { mergingArrays } from "./merging-sorted-arrays";

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergingArrays(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
