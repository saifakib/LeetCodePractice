// TC: O(N) // N = size of nums
// MC: O(N)
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        deque<int> dcr_seq;
        vector<int> max;
        for(int i = 0; i < nums.size(); i++) {
            // is deque oversized ?
            if(!dcr_seq.empty() && (i - dcr_seq.front() >= k)) {
                dcr_seq.pop_front();
            }
            while(!dcr_seq.empty() && nums[dcr_seq.back()] < nums[i]) {
                dcr_seq.pop_back();
            }  
            dcr_seq.push_back(i);
            if(i >= k - 1) max.push_back(nums[dcr_seq.front()]);
        }
        return max;
    }
};