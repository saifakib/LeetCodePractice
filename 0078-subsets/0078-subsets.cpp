class Solution {
private:
    vector<vector<int>> results;
    vector<int> subset;
    void gen(vector<int>& nums, int idx) {
        if(idx >= nums.size()) {
            results.push_back(subset);
            return;
        };
        // left - include
        subset.push_back(nums[idx]);
        gen(nums, idx + 1);
        subset.pop_back();
        
        // right - skip
        gen(nums, idx + 1);
    }
    
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        results.clear();
        subset.clear();
        gen(nums, 0);
        return results;
    }
};