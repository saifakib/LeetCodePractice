// TC: O(N)
// SC: O(N)
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> set;

        int longest = 0;

        // create a unique set
        for (auto el : nums) {
            set.insert(el);
        }

        for(auto num: nums) {
            // find most left value
            if(set.find(num - 1) == set.end()) {
                int length = 1;

                // traverse to most right consecutive number
                while(set.find(num + length) != set.end()) {
                    length++;
                }

                longest = max(longest, length);
            }
        }
        return longest;
    }
};