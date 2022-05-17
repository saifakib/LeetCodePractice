/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

// First Solution for those extra character which not match the first string
//     let obj = s.split("").reduce((acc, val) => {
//         acc[val] = val;
//         return acc;
//     }, {});
    
    
//     for(let i=0; i<t.length; i++) {
//         if(t[i] != obj[t[i]]) return t[i]
//         delete obj[t[i]]
//     }
    
    for(let i=0; i<s.length; i++) {
        t = t.replace(s[i], '');
    }
    return t
};