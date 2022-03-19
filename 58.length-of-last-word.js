/**
 * Idea:
 * First here remove the white space end of this sentance. Then Split the whole sentance and take the last one and its size.
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
    let splited = s.trimEnd().split(' ')
    return splited[splited.length-1].length
};

const str = "Saif Uddin"
console.log(lengthOfLastWord(str))