/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
        let output = "";
        let minStrsWordLen = Math.min(...strs.map((str) => str.length))
        for(let i=0; i<minStrsWordLen; i++) {
            let char = strs[0][i];
            if(strs.every(str => str[i] === char)) {
                output += char
            } else {
                break;
            }
        }
        return  output;
    }
    
