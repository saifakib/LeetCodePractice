/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0;
    let prefLen = pref.length;
    
    for(let i=0; i<words.length; i++) {
        if(words[i].substr(0, prefLen) === pref) {
            count++;
        }
    }
    
    return count;
};
