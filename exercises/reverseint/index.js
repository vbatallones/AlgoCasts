// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my solution
function reverseInt(n) {
    const numToString = parseInt(n.toString().split('').reverse().join(''));
    if (n < 0) {
        return -Math.abs(numToString)
    } else {
        return numToString
    }
    
}

// another solution.
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    
    // Math.sign() will give you negative sign if you passed a negative number into the argument
    // and vice versa with positive number
    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
