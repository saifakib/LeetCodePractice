/**
 * @param {number} num
 * @return {number}
 */

function divided(num) {
    return num/2;
}

function subtract(num) {
    return num-1;
}

var numberOfSteps = function(num) {
    let stepcount = 0;
    while( num !== 0) {
        if(num%2==0) {
            num = divided(num);
            stepcount++;
        }
        else {
            num = subtract(num);
            stepcount++;
        }
    }
    return stepcount;
};