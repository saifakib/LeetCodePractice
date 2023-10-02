class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> result;
        map<int, int> obj = {};
        for(int i=0; i<nums.size(); i++) {
            int check_value = target - nums[i];
            if(obj.find(nums[i]) != obj.end()) {
                result.push_back(obj[nums[i]]);
                result.push_back(i);
                return result;
            } else {
                obj[check_value] = i;
            }
        };
        return result;
    }
};