class Solution {
public:
    int jump(vector<int>& nums) {
        int jump = 0;
        int currE = 0;
        int currF = 0;
        
        for(int i = 0; i < nums.size() - 1; i++) {
            currF = max(currF, nums[i] + i);
            
            if(i == currE) {
                jump++;
                currE = currF;
            }
        }
        return jump;
    }
};