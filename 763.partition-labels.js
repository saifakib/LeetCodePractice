/**
 * @param {string} s
 * @return {number[]}
 */


var partitionLabels = function(s) {

    let output = []
    let start = 0
    let end = -1
    for(let i=0; i<s.length; i++){
        end = Math.max(s.lastIndexOf(s[i]),end)
        if(i===end){
            output.push(i-start+1);
            start=i+1
        }
    }
    return output;
};

