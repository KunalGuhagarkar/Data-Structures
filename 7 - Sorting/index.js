// Intro to Sorting

// JS sort() method

function numberCompared(num1, num2) {
    return num1 - num2;
}

console.log([6, 4, 15, 10].sort(numberCompared)); // [ 4, 6, 10, 15 ]

function numberCompared2(num1, num2) {
    return num2 - num1;
}

console.log([6, 4, 15, 10].sort(numberCompared2)); // [ 15, 10, 6, 4 ]

function compareStrbyLength(str1, str2) {
    return str1.length - str2.length;
}

console.log(
    ["Steele", "Colt", "Data Structures", "Algorithms"].sort(
        compareStrbyLength,
    ),
);
// [ 'Colt', 'Steele', 'Algorithms', 'Data Structures' ]

function compareStrbyLength2(str1, str2) {
    return str2.length - str1.length;
}

console.log(
    ["Steele", "Colt", "Data Structures", "Algorithms"].sort(
        compareStrbyLength2,
    ),
);
// [ 'Data Structures', 'Algorithms', 'Steele', 'Colt' ]
