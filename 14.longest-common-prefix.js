/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(1 <= strs.length <= 200 && strs == undefined) return false
    let prefix = ""
    let maxprefixLen = Math.min(...strs.map(str => str.length))
    for(let i=0; i<maxprefixLen; i++) {
      let char = strs[0][i]
      if( strs.every(str => str[i] === char)) {
          prefix += char
      } else {
          break
      }
    }
    return prefix
};

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))