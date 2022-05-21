/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    // split the sentances and created an array
    let splited = s.split(" ");
    
    // get first 4 words
    let finals = splited.slice(0, k);
    
    // joined the requred words and return
    return finals.join(" ");
};