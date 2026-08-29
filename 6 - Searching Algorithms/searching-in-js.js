// JavaScript has search!
// There are many different search methods on arrays in JavaScript:

// indexOf
// includes
// find
// findIndex

const names = ["Alex", "Jordan", "Taylor", "Morgan", "Sam", "Riley"];
// indexes:      0         1         2         3       4       5

// indexOf
console.log(names.indexOf('Jordan')); // 1 (found at index 1)
console.log(names.indexOf('Kunal')); // -1 (not found)

// includes
console.log(names.includes("Morgan")); // true (found)
console.log(names.includes("Kunal")); // false (not found)

// find
console.log(names.find(name => name === "Taylor")); // Taylor (found)
console.log(names.find(name => name === "Kunal")); // undefined (not found)

// findIndex
console.log(names.findIndex(name => name === "Sam"));
console.log(names.findIndex(name => name === "Kunal"));