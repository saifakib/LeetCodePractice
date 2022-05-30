/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sentanceSplit = s.split(" ");
    sentanceSplit.forEach((word, index) => {
        sentanceSplit[index] = word.split("").reverse().join("");
    })
    return sentanceSplit.join(" ");
};