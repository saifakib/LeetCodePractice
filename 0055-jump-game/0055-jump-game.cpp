class Solution {
public:
    bool canJump(vector<int>& nums) {
        int lastP = nums.size() - 1;
        
        for(int i = nums.size() - 1; i >= 0; i--) {
            if(nums[i] + i >= lastP) lastP = i;
        }
        return lastP == 0;
    }
};