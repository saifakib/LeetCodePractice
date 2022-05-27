/**
 * @param {number} n
 * @return {string[]}
 */

function check(n,i) {
    return Number.isInteger(n/i);
}
var fizzBuzz = function(n) {
    let output = new Array(n).fill(0);
    
    for(let i=1; i<=n; i++) {
        if(check(i, 3) || check(i, 5)) {
            if(check(i, 3) && check(i, 5)) {
                output[i-1] = "FizzBuzz";
            } 
            else if(check(i, 3)) {
                output[i-1] = "Fizz";
            } 
            else {
                output[i-1] = "Buzz";
            }
        } else {
            output[i-1] = i.toString();
        }
    }
    return output;
};