// TC: O(n)
// SC: O(1)

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        for(int i = 0, p = 0; i < nums.size(); i++) {
            if(nums[i] != 0) {
                swap(nums[i], nums[p]);
                p++;
            }
        }
        return;
    }
};




