// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Time Complexity -> O(n)
// Space Complexity -> O(n)
function areThereDuplicates(...items) {
    let freqCounter = {};

    for (let item of items) {
        console.log(item);
        if (freqCounter[item]) return true;
        freqCounter[item] = (freqCounter[item] || 0) + 1;
    }
    return false;
}

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates("a", "b", "c", "a"));

// Time Complexity -> O(n log n)
// Space Complexity -> O(1)

function areThereDuplicates2(...items) {
    items.sort();

    for (let i = 0; i < items.length; i++) {
        if (items[i] === items[i+1]) return true;
    }
    return false;
}

console.log(areThereDuplicates2(1, 2, 3));
console.log(areThereDuplicates2(1, 2, 2));
console.log(areThereDuplicates2("a", "b", "c", "a"));

