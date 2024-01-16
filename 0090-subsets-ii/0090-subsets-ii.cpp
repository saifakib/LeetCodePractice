class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        results.clear();
        subset.clear();
        gen(nums, 0);
        set<vector<int>> finals;
        finals = sortAndRemoveDuplicate(results);
        return vector<vector<int>>(finals.begin(), finals.end());
        
    }
private:
    vector<vector<int>> results;
    vector<int> subset;
    void gen(vector<int> &nums, int idx) {
        if(idx >= nums.size()) {
            results.push_back(subset);
            return;
        }
        
        // include
        subset.push_back(nums[idx]);
        gen(nums, idx + 1);
        subset.pop_back();
        
        // skip
        gen(nums, idx + 1);
    };
    
    set<vector<int>> sortAndRemoveDuplicate(vector<vector<int>> &results) {
        set<vector<int>> finals;
        for(auto &set: results) {
            sort(set.begin(), set.end());
            finals.insert(set);
        };
        return finals;
    }
};