// frequency counter pattern

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

/*  Example:
    same([1,2,3], [4,1,9]) // true
    same([1,2,3], [1,9]) // false
    same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// Time Complexity => O(n^2)
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) return false;
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }

// console.log(same([1,2,3], [4,1,9]));

// Using Frequency Counter Pattern
// Time Complexity => O(n)

function same(arr1, arr2) {
    if (arr1.length != arr2.length) return false;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
}


console.log(same([1,2,3], [4,1,9]));