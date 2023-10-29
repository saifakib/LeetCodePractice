// TC: 0(N * M log M) where N is the number of string and M is maximum length of a string
// SC: 0(N)

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> groups;

        for(auto str: strs) {
            string original_str = str; 
            sort(str.begin(), str.end());
            groups[str].push_back(original_str);
        }

        vector<vector<string>> group_anagrams;

        for(auto& group: groups) {
            group_anagrams.push_back(move(group.second));
        }

        return group_anagrams;
    }
};