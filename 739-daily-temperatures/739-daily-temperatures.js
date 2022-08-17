/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let output = [];
    
    for(let i=0; i<temperatures.length; i++) {
        if(i === temperatures.length-1) {
            output.push(0)
        }
        else {
            let found = false;
            for(let j=i+1; j<temperatures.length; j++) {
                if(temperatures[i] < temperatures[j]) {
                    output.push(j-i);
                    found = true;
                    break;
                }
            }
            if(!found) output.push(0);
        }
    }
    return output;
};