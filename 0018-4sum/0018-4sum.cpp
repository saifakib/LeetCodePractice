// TC: O(N^3)
// SC: 0(N)
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>>quadruplets;
        sort(nums.begin(), nums.end());  // Intro sort O(N Log N)
        for(int i = 0; i < nums.size(); i++) {
            int a = nums[i];

            for(int j = i + 1; j < nums.size(); j++) {
                int b = nums[j];
                // find 2 right suffix which summation is a+ b + c + d = target
                int L = j + 1;
                int R = nums.size() - 1;
                long int nextTarget = static_cast<long int>(target) - (a + b);

                while(L < R) {
                    if(nums[L] + nums[R] > nextTarget) R--;
                    else if(nums[L] + nums[R] < nextTarget) L++;
                    else {
                        int c = nums[L];
                        int d = nums[R];
                        while(L + 1 < R && nums[L] == nums[L + 1]) L++;
                        while(R - 1 > L && nums[R] == nums[R - 1]) R--;
                        quadruplets.push_back({ a, b, c, d });
                        L++;
                        R--;
                    }
                }
                while(j + 1 < nums.size() && nums[j] == nums[j + 1]) j++;
            }
            while(i + 1 < nums.size() && nums[i] == nums[i + 1]) i++;
        }
        return quadruplets;
    }
};