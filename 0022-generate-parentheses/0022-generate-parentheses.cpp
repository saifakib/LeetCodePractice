class Solution {
private:
    void gen(string result, string cur_b, int rem_o, int rem_c) {
        if(rem_c < rem_o) return;
        result += cur_b;
        if(cur_b == "(") rem_o = rem_o - 1; 
        else rem_c = rem_c - 1;
        if(rem_o == 0 && rem_c == 0) results.push_back(result);
        if(rem_o > 0) gen(result, "(", rem_o, rem_c);
        if(rem_c > 0) gen(result, ")", rem_o, rem_c);
    }
public:
    vector<string> results;
    vector<string> generateParenthesis(int n) {
        gen("", "(", n, n);
        return results;
    }
};