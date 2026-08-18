function logAtMostFive(n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

logAtMostFive(3);