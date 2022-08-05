/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    if(s.length != t.length) return false;
    
    let tset = new Set(t.split("")); // { }
    let hash = {};
    
    for(let i=0; i <= s.length-1; i++) {
        if(tset.has(t[i])) {
            hash[s[i]] = t[i];
            tset.delete(t[i]);
        } 
    }
    
    let string = "";
    
    for(let j=0; j<s.length; j++) {
        string += hash[s[j]]
    }
    
    if(string == t) {
        return true
    } else {
        return false;
    }
    
};