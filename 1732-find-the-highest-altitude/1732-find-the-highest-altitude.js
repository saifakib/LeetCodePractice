/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0;
    let check = 0;
    for(let i=0; i<gain.length; i++) {
        check = check + gain[i];
        if(check > highest) {
            highest = check;
        }
        gain[i] = check;
    }
    return highest;
};