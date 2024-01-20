class Solution {
public:
    vector<string> buttons = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    void combination(string &digits, string proStr, int idx, vector<string> &result) {
        if(idx >= digits.size()) {
            result.push_back(proStr); return;
        }
        int number = digits[idx] - '0';
        string val = buttons[number];
        for(auto &ch: val) {
            proStr.push_back(ch);
            combination(digits, proStr, idx + 1, result);
            proStr.pop_back();
        }
    }
    vector<string> letterCombinations(string digits) {
        vector<string> result;
        if(digits.size() == 0) return result;
        combination(digits, "", 0, result);
        return result;
    };
};