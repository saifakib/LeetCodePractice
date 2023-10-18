// TC: O(N)
// SC: 0(1)
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int candidate = -1;
        int votes = 0;

        for(int i = 0; i < nums.size(); i++) {
            if(votes == 0) {
                candidate = nums[i];
                votes = 1;
            } else {
                if(candidate == nums[i]) votes++;
                else votes--;
            }
        }

        int count = 0;
        int j = 0;
        while(j < nums.size()) {
             if(candidate == nums[j]) count++;
             j++;
        }

        if(floor(nums.size() / 2) < count) return candidate;
        
        return -1;
    }
};