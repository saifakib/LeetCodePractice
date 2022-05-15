/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    
    sentences.forEach(sen => {
        let le = sen.split(" ").length;
        if(le > max) {
            max = le;
        }
    })
    
    return max;
};