// Implementing Naive String Search

function naiveStringSearch(str, keyword) {
    let count = 0;
    for (let i=0; i < str.length; i++) {
        for (let j=0; j < keyword.length; j++) {
            if (str[i+j] !== keyword[j]) {
                break;
            }
            if (j === keyword.length-1) count++
        }
    }
    return count;
}

console.log(naiveStringSearch("gokgokgok", "gok"));