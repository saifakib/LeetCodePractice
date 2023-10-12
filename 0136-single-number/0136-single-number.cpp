class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int missing_ele = 0;
        for(int val: nums) {
            missing_ele ^= val;
        };

        return missing_ele;
    }
};