// Naive String Search

// Pseudocode

// - Loop over the longer string
// - Loop over the shorter string
// - If the characters don't match, break out of the inner loop
// - If the characters do match, keep going
// - If you complete the inner loop and find a match, increment the count of matches
// - Return the count

function naiveStringSearch(str, keyword) {
    let count = 0;
    for (let char of str) {
        for (let key of keyword) {
            console.log(key, char)
        }
        console.log(char)
        count++
    }
    return count;
}

console.log(naiveStringSearch("kkkunal", "kunal"));
