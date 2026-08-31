// Implementing Naive String Search

function naiveStringSearch(long, short) {
    for(let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if(long[i] !== short[j+i]) {
                break;
            }
            console.log(long[i], short[j+i]);
        }
        console.log("BREAK");
    }
}

console.log(naiveStringSearch("kkkunal ku", "ku"));