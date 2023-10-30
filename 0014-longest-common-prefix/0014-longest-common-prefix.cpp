// TC: 0(S) where S total number of characters
// SC: 0(1)
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string prefix_string ("");

        string word = strs[0];
        int index = 0;
        while(index < word.size()) {
            for(int i=1; i<strs.size(); i++) {
                if(word[index] != strs[i][index]) return prefix_string;
            }
            prefix_string.push_back(word[index]);
            index++;
        }

        return prefix_string;
    }
};