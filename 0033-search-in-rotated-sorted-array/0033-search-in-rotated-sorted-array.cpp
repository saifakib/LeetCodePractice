// TC: 0(logN) where N is the size of nums
// MC: 0(1)
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int L = 0;
        int R = nums.size() - 1;
        
        while(L <= R) {
            int M = L + (R - L) / 2;
            if(nums[M] == target) return M;
            //in sorted side if target is in or out, then left or right slider move, 
            if(nums[L] <= nums[M]) {
                if(nums[L] <= target && target < nums[M]) R = M - 1;
                else L = M + 1;
            } else {
                 if(nums[M] < target && target <= nums[R]) L = M + 1;
                else R = M - 1;
            }
        }
        return -1;
    }
};