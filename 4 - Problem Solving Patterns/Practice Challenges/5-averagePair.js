// Multiple Pointers - averagePair

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Examples
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// Solution

function averagePair(arr, target) {
    if (arr.length === 0) return false;

    let first = 0;
    let second = arr.length-1;

    while (second < arr.length) {
        let avg = (arr[first] + arr[second]) / 2;
        if (avg / 2 === target) {
            return true;
        } else if (avg < target) {
            first++
        } else {
            second--
        }
        
    }
    return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));
