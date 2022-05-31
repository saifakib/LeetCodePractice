/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let total = 0;
    let count = 1;
    let breakAdd = 0;
    for(let i=1; i<=n; i++) {
        if(i%7 === 0) {
            total = total + count + breakAdd;
            count = 1;
            breakAdd++;
            
        } else {
            total = total + count + breakAdd;
            count++;
        }
    }
    return total;
};