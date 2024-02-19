// TC: O(N)      // N = size of nums
// MC: O(N)     // Stack size
class Solution {
public:
    int largest = INT_MIN / 2;
    int solve(int x, vector<int>& nums) {
        if(x >= nums.size()) return 0;
        int take = nums[x] + solve(x + 1, nums);
        int indexMax = max(take, nums[x]);
        largest = max(largest, indexMax);
        return indexMax;
    }
    int maxSubArray(vector<int>& nums) {
        solve(0, nums);
        return largest;
    }
};