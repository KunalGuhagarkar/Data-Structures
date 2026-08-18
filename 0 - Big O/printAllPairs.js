function printAllPairs(n) {
    console.log("Start");
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(i, j);
        }
    }
    console.log("End");
}

printAllPairs(3);
