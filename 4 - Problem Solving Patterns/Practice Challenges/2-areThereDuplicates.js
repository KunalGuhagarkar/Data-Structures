// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...items) {
    let freqCounter = {};

    for (let item of items) {
        
        if (freqCounter[item]) {
            return 'true';
        }
        freqCounter[item] = (freqCounter[item] || 0) + 1;
    }
    return false;

    // console.log(freqCounter);

}

console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));



