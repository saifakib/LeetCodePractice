/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let hash = {};
    s.split("").forEach((value) => {
        if(hash[value]) {
            hash[value]++;
        } else {
            hash[value] = 1;
        }
    })

    for(let i=0; i<t.length; i++) {
        // if(hash[t[i]]) {
        //     if(hash[t[i]] > 1) {
        //         hash[t[i]]--
        //     }
        //     else {
        //         delete hash[t[i]]
        //     }
        // } 
        // else {
        //     return false;
        // }
        if (!hash[t[i]]) return false
        else hash[t[i]]--  
    }
    return true;
};