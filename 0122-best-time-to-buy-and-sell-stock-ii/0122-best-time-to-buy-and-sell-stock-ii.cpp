// TC: O(N)
// SC: O(1)
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minBuy = prices[0];
        int totalProfit = 0;

        for(int i=1; i < prices.size(); i++) {
            minBuy = min(minBuy, prices[i]);
            while(i + 1 < prices.size() && prices[i] < prices[i+1]) {
                i++;
            }
            totalProfit += prices[i] - minBuy;
            if(i+1 < prices.size()) {
                minBuy = prices[i+1];
            }
            i++;
        }
        return totalProfit;
    }
};