class Solution {
public:
    vector<int> cache;
    int solver(int x, vector<int> &nums) {
        if(x >= nums.size()) return 0;
        if(cache[x] != -1) return cache[x];
        int take = nums[x] + solver(x + 2, nums);
        int skip = solver(x + 1, nums);
        return cache[x] = max(take, skip);
    }
    int rob(vector<int>& nums) {
        if(nums.size() == 1) return nums[0];
        cache.resize(nums.size() + 1, -1);
        int res1 = solver(1, nums);
        cache.clear();
        cache.resize(nums.size() + 1, -1);
        vector<int> nums_copy = nums;
        nums_copy.pop_back();
        int res2 = solver(0, nums_copy);
        return max(res1, res2);
    }
};