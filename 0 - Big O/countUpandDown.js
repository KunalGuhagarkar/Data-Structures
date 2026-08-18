function countUpandDown(n) {
    console.log("Going UP");
    for (let i = 0; i <= n; i++ ) {
        console.log(i);
    }
    console.log('Going DOWN');
    for (let j = n; j >= 0; j--) {
        console.log(j);
    }
}

countUpandDown();