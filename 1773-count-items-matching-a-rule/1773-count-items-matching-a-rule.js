
const types = {
    type: 0,
    color: 1,
    name: 2
};

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
        for(let i = items.length-1; i>=0; i--) {
        if(items[i][types[ruleKey]] == ruleValue) {
            count++;
        }
    }
    return count;
};