// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) { 
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join("");
}


function anagrams(stringA, stringB) {
    const firstString = transformString(stringA);
    const secondString = transformString(stringB);

    // check if the length of the object key is not equal
    if (Object.keys(firstString).length !== Object.keys(secondString).length) {
        return false;
    }

    //  iterate and check if the value count is not the same as the other.
    for (let char in firstString) {
        if (firstString[char] !== secondString[char]) {
            return false;
        }
    }
    // return true if the length and count of the string is anagram or the same.
    return true;
}

// helper function 
function transformString(str) {
    const obj = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        obj[char] = obj[char] + 1 || 1;
    }

    return obj;
}

module.exports = anagrams;
