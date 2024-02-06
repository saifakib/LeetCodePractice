// TC: O(1)
class Solution {
public:
    int calculate(string s) {
        stack<int> nums;
        stack<int> ops;
        long long num = 0;
        int sign = 1;   // 1 for +, -1 for -;
        int result = 0;
        for(auto ch: s) {
            if(isdigit(ch)) {
                num = num * 10 + ch - '0';
            }
            else {
                result += num * sign;
                num = 0;
                if(ch == '+') sign = 1;
                if(ch == '-') sign = -1;
                if(ch == '(') {
                    nums.push(result);
                    ops.push(sign);
                    result = 0; sign = 1;
                }
                if(ch == ')' && ops.size()) {
                    result = ops.top() * result + nums.top();
                    nums.pop(); ops.pop();
                }
            }
        }
        result += num * sign;
        return result;
    }
};