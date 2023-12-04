class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int L = 0;
        int R = nums.size() - 1;
        
        while(L < R) {
            int M = L + (R - L) / 2;
            if(nums[M] < nums[M + 1]) L = M + 1;
            else R = M;
        }
        return R;
    }
};