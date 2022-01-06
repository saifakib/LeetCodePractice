/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === '' || needle === haystack ) return 0
    if (haystack.length < needle.length) return -1;
    
    for(let i=0; i<haystack.length; i++) {
        let j=i, k=0;
        while(haystack[j] == needle[k] && k < needle.length) {
            j++, k++
        }
        if(k == needle.length) return i
    }
    return -1
};

let haystack = "hello", needle = "ll"
console.log(strStr(haystack, needle))