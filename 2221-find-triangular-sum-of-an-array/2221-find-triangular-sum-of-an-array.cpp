// TC: O(N^2) // nums size
// MC: O(1)
class Solution {
public:
    int triangularSum(vector<int>& nums) {
        int start = 0;
        int end = nums.size() - 1;
        
        while(start < end) {
            for(int i = start; i < end; i++) {
                nums[i] = (nums[i] + nums[i + 1]) % 10;
            }
            end--;
        }
        return nums[0];
    }
};