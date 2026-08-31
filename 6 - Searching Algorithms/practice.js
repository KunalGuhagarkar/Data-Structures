// Implementing Naive String Search

function naiveStringSearch(long, short) {
    for(let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if(long[i+j] !== short[i]) {
                break;
            }
            console.log(long[i+j], short[j]);
        }
        console.log("BREAK");
    }
}

console.log(naiveStringSearch("kkkunal ku", "ku"));