/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0) {
        return true;
    }
    let presentIndex = 0;
    let value;
    for(let i = 0; i<t.length; i++) {
        value = t[i];
        if(s[presentIndex] === value) {
            if(s.length - 1 === presentIndex) {
                return true;
            }
            presentIndex++;
        } 
    }
    return false;
};