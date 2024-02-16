// TC: O(N) // N is the size of nums
// SC: O(N)
class Solution {
public:
    vector<int> cache;
    int findMaxProfit(int x, vector<int> &nums) {
        if(x >= nums.size()) return 0;
        if(cache[x] != -1) return cache[x];
        int take = nums[x] + findMaxProfit(x+2, nums);
        int skip = 0 + findMaxProfit(x+1, nums);
        return cache[x] = max(take, skip);
    }
    int rob(vector<int>& nums) {
        cache.resize(nums.size(), -1);
        return findMaxProfit(0, nums);
    }
};