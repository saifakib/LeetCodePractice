/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let store = {};
    let longest = 0;
    let len = 0;
    let start = 0;
    
     s.split("").forEach((item, index) => {
        if (store[item] || store[item] == 0) {
            if (start <= store[item]) {
                len = index - start;
                start = store[item] + 1;
                store[item] = index;
            }
            else {
                store[item] = index;
                len = (index - start) + 1;
            } 
        } else {
            store[item] = index;
            len = (index - start) + 1;
        }

        if (len > longest) {
            longest = len;
        }
    })
    
    return longest;
};