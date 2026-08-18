function printAllPairs(n) {
    console.log('Start');
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            console.log(i, j);
        }
    }
}

printAllPairs(5);