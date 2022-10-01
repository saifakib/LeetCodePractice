/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [profit, left, right] = [0, 0, 1];
    
    while(right < prices.length) {
        if(prices[left] > prices[right]) {
            left = right;
            right++;
        }
        else {
            let diff = prices[right] - prices[left];
            if(diff > profit) profit = diff;
            right++;
        }
    }
    return profit;
};