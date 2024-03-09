// TC: O(N) // N = size of string s
// MC: O(1)
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int> freq(256, 0);
        int longest = 0;
        
        for(int L = 0, R = 0; R < s.size(); R++) {
            freq[s[R]]++;
            bool hasDup = freq[s[R]] > 1;
            while(hasDup && L < s.size()) {
                freq[s[L]]--;
                if(freq[s[L]] == 1) hasDup = false;
                L++;
            };
            longest = max(longest, R - L + 1);
        }
        return longest;
    }
};