/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let maxLen = 0;
    
    if(word1.length >= word2.length) {
        maxLen = word1.length;
    } else {
        maxLen = word2.length;
    }
    
    word1 = word1.split("");
    
    // loop continue to max length of any string one
    for(let i=0; i<maxLen; i++) {
        // if index of word2 have
        if(word2[i]) {
            // if no more index exits in word1 then push the index value of word2 in word1, Otherwise it will added with word1 index value
            if(!word1[i]) {
                word1.push(word2[i])
            } else {
                word1[i] = word1[i]+word2[i]
            }
        }
    }
    
    // there word1 are splited so it shoud be return a pure string
    return word1.join("");
};