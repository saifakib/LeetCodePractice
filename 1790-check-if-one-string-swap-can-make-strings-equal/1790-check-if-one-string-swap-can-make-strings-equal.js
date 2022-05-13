/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    
    // if two strings are already equal
    if(s1 == s2) return true;
    
    // impossible to make them equal with one string swap cause of there length not equal
    if(s1.length !== s2.length) return false;
    
    // String not equal and there length not equal so next 
    
    // take two null array to take unmatch letter;
    let StrA1 = [];
    let StrA2 = [];
    
    for(let i=0; i<s1.length; i++) {
        if(s1[i] != s2[i]) {
            StrA1.push(s1[i]);
            StrA2.push(s2[i]);
        }
    }
    
    // if change one string it should be difference two between two string
    if(StrA1.length == 2) {
        if(StrA1[0] == StrA2[1] && StrA1[1] == StrA2[0]) return true
    }
    
    return false;
    
};