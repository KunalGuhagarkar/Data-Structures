// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

/* Example
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

// Using Frequency Counter Pattern

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let char of str1) {
        freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }

    for (let char of str2) {
        freqCounter2[char] = (freqCounter2[char] || 0) + 1;
    }

    for (let key in freqCounter1) {
        if (!(key in freqCounter2)) return false;
        if (freqCounter1[key] !== freqCounter2[key]) return false;
    }
    return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

// Refractor using only 1 freqCounter variable

function validAnagram2(str1, str2) {
    if (str1.length !== str2.length) return false;

    let freqCounter = {};
    
    for(let char of str1) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }

    for (let char of str2) {
        if(!(freqCounter[char])) return false;
        freqCounter[char]--;
    }
    return true;
}

console.log(" ");
console.log(validAnagram2("", "")); // true
console.log(validAnagram2("aaz", "zza")); // false
console.log(validAnagram2("anagram", "nagaram")); // true
console.log(validAnagram2("rat", "car")); // false
console.log(validAnagram2("awesome", "awesom")); // false
console.log(validAnagram2("qwerty", "qeywrt")); // true
console.log(validAnagram2("texttwisttime", "timetwisttext")); // true