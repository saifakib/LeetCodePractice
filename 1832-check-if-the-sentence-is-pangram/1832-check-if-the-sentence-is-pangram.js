/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    
    sentence = sentence.split("");
    const hash = sentence.reduce((acc, letter) => {
        if(!acc[letter]) {
            acc[letter] = 1
        }
        return acc;
    }, {});
    
    for(let i=97; i<=122; i++) {
        let char = String.fromCharCode(i)
        if(!hash[char]) {
            return false
        }
    }
    return true;
    
};