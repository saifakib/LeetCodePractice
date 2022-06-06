/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let output = s.split("").reduce((acc, val, index) => {
        if(index%2==0) {
            acc = acc+val;
        }
        else {
            let nToChar = String.fromCharCode(s[index-1].charCodeAt() + parseInt(val));
            acc = acc + nToChar;
        }
        return acc;
    }, "");
    return output;
};