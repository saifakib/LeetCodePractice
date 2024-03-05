// TC: O(N) // N = size of nums;
// MC: O(N)
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int sum = 0, cnt = 0;
        unordered_map<int, int> pSum;
        pSum[sum] = 1;
        for(int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            if(pSum.count(sum - k)) cnt += pSum[sum - k];
            pSum[sum]++;
        }
        return cnt;
    }
};