// isSubsequence - Multiple Pointer Pattern

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:

// - Time Complexity - O(N + M)
// - Space Complexity - O(1)

// Solution

function isSubsequence(key, str) {
    let pointer = 0;
    let pointer2 = 0;

    while (pointer2 < str.length) {
        if (key[pointer] === str[pointer2]) pointer++;
        if (pointer === key.length) return true;
        pointer2++;
    }
    return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
