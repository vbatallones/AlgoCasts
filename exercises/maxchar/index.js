// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // create a variable and set it into an empty obj.
    const obj = {};
    // setting a max variable to zero to compare if the element greater than max
    let max = 0;
    // a maxChar variable set into empty string where we will passed in the element that is commonly used.
    let maxChar = '';

    // iterate over the set of string
    for (let char of str) {
        // if the character is more than one appearance we will increment the count
        if (obj[char]) {
            obj[char]++;
        } else {
            // otherwise set it into one
            obj[char] = 1;
        }
    }
    // iterate over objects
    for (let key in obj) {
        // if the value of the object property is greater than the max
        // set the max to that highest value
        // and set the maxChar to that key property
        if (obj[key] > max) {
            max = obj[key]
            maxChar = key
        }
    }
    // return maxChar
    return maxChar

}

module.exports = maxChar;
