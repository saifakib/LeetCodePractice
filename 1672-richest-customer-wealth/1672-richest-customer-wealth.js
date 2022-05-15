/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    
    accounts.forEach(wealth => {
        let wel = wealth.reduce((a, b) => a+b);
        if(wel > maxWealth) {
            maxWealth = wel
        }
    })
    return maxWealth;
};