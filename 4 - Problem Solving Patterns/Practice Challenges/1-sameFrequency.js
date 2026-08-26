/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:
1. sameFrequency(182,281) // true
2. sameFrequency(34,14) // false
3. sameFrequency(3589578, 5879385) // true
4. sameFrequency(22,222) // false

*/

function sameFrequency(num1, num2) {
    if (`${num1}`.length !== `${num2}`.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (num of `${num1}`) {
        freqCounter1[num] = (freqCounter1[num] || 0) + 1;
    }

    for (num of `${num2}`) {
        freqCounter2[num] = (freqCounter2[num] || 0) + 1;
    }

    console.log(freqCounter1);
    console.log(freqCounter2);


    
}

console.log(sameFrequency(182,281));
