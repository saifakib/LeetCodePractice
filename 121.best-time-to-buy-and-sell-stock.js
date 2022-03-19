

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let [left,right,profit] = [0,1,0]

    while(right < prices.length) {
        if(prices[left] >= prices[right] ) {
            left = right
            right = right + 1
        } else {
            let diff = prices[right] - prices[left]
            if(diff > profit) {
                profit=diff
            }
            right = right + 1
        }
    }
    return profit
};


const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))



