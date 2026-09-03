// KMP (Knutt-Morris-Pratt) Search

// Building the Table
function matchTable(word) {
    let arr = Array.from({ length: word.length }).fill(0);
    let suffixEnd = 1;
    let prefixEnd = 0;
    // lolol
    while (suffixEnd < word.length) {
        if (word[suffixEnd] === word[prefixEnd]) {
            prefixEnd++;
            arr[suffixEnd] = prefixEnd;
            suffixEnd += 1;
        } else if (word[suffixEnd] !== word[prefixEnd] && prefixEnd !== 0) {
            prefixEnd = arr[prefixEnd - 1];
        } else {
            arr[suffixEnd] = 0;
            suffixEnd += 1;
        }
    }
    return arr;
}

console.log(matchTable("lolol"));

// KMP Search

function kmpSearch(long, short) {
    const table = matchTable(short);
    let shortIndex = 0;
    let longIndex = 0;
    let count = 0;
    while (longIndex < long.length - short.length + shortIndex + 1) {
        if (short[shortIndex] !== long[longIndex]) {
            if (shortIndex === 0) longIndex += 1;
            else shortIndex = table[shortIndex - 1];
        } else {
            shortIndex++;
            longIndex++;
            if (shortIndex === short.length) {
                count++;
                shortIndex = table[shortIndex - 1];
            }
        }
    }
    return count;
}

console.log(kmpSearch("lolol", "lol"));
console.log(kmpSearch("abacababda", "ab"));
