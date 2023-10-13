// TC: O(N)
// SC: O(N)
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> numsIndex;
        for(int i=0; i<nums.size(); i++) {
            if(numsIndex.find(nums[i]) != numsIndex.end()) {
                return {numsIndex[nums[i]], i};
            }
            numsIndex[target-nums[i]] = i;
        }
        return {};
    }
};