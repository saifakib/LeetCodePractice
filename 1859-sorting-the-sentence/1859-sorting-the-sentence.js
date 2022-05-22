/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let res = [];
    let splited =  s.split(" ");
    splited.forEach(word => {
        let expind = word[word.length-1];
        res[expind-1] = word.split(word[word.length-1])[0];
    })
    
    return res.join(" ");
};