// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /* 
        I split on each character. The split method will make the string into an array.

        After I split the string into each character and it's an array already, now I used the
        reverse() method which will reverse the array of each character.
        
        Then I use the join() method to join them after reversing the string.
    */
    return str.split('').reverse().join("")
}

module.exports = reverse;
