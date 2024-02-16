// TC: O(N) // N is the size of nums
// SC: O(N)
class Solution {
public:
    vector<int> cache;
    // Recursive way
    // int findMaxProfit(int x, vector<int> &nums) {
    //     if(x >= nums.size()) return 0;
    //     if(cache[x] != -1) return cache[x];
    //     int take = nums[x] + findMaxProfit(x+2, nums);
    //     int skip = 0 + findMaxProfit(x+1, nums);
    //     return cache[x] = max(take, skip);
    // }
    int getIndexProfit(int index) {
        if(index < 0 || index >= cache.size()) return 0; 
        if(cache[index] != -1) return cache[index];
        return -1;
    }
    int rob(vector<int>& nums) {
        cache.resize(nums.size(), -1);
        // return findMaxProfit(0, nums);
        int profit = 0;
        for(int i = nums.size() - 1; i >= 0; i--) {
            int take = nums[i] + getIndexProfit(i + 2);
            int skip = getIndexProfit(i + 1);
            cache[i] = max(take, skip);
            profit = cache[i];
        }
        return profit;
    }
};