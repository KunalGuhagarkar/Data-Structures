// Implementing Naive String Search

function naiveStringSearch(long, short) {
    for(let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j]);
        }
    }
}

console.log(naiveStringSearch("kkkunal ku", "ku"));