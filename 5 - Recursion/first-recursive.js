// First Recursive Function

// Count Down from n numbers

function countDown(num) {
    if (num === 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    return countDown(num);
}

countDown(5);