/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // using regular expression
    return s.replace(/[^a-z0-9]/gi, '').toLowerCase() === s.replace(/[^a-z0-9]/gi, '').toLowerCase().split("").reverse().join("");
};