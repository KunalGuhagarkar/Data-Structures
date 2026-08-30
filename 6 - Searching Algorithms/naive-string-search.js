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
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < keyword.length; j++) {
            console.log(keyword[j], str[j+i]);
            if (keyword[i] !== str[i+j]) {
                console.log("BREAK")
                break;
            }
            if ( j === keyword.length-1) {
                count++
            }
        }
    }
    return count;
}

console.log(naiveStringSearch("kkkunal", "kunal"));
