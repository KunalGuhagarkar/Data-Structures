function charCount(str) {
    // make object return at end
    let result = {};

    // loop over string, for each chareacter ...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        // if char is something else (space, period, etc) don't do anyting
        if (/[a-zA-Z]/.test(char)) {
            // if char is a number/letter AND in object, add 1 to count.
            if (result[char] > 0) {
                result[char]++;
            }

            // if char is a number/letter AND not in object, add it to the object and set value to 1.
            else {
                result[char] = 1;
            }
        }
    }

    // return object at end
    return result;
}

console.log(charCount("Hi hello"));