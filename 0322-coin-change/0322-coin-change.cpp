// TC: O(nW) where n = number of coins and W = maximum amount
// MC: O(nW)
class Solution {
public:
    vector<vector<int>> cache;
    int f(int x, int amount, vector<int>& coins) {
        if(amount < 0) return INT_MAX / 2;
        if(x >= coins.size()) {
            // coin and amount end
            if(amount == 0) return 0;
            return INT_MAX / 2;
        };
        if(cache[x][amount] != -1) return cache[x][amount];
        int take = 1 + f(x, amount - coins[x], coins);
        int skip = f(x + 1, amount, coins);
        return cache[x][amount] = min(take, skip);
    }
    int coinChange(vector<int>& coins, int amount) {
        cache.resize(coins.size() + 1, vector<int>(amount + 1, -1));
        int minCoin = f(0, amount, coins);
        return minCoin == INT_MAX / 2 ? -1 : minCoin;
    }
};

// futher analysis for remember
// try to analysis in last index like f(x = 5(last_index), amount = 0) or f(x = 5(last_index), amount = 6);