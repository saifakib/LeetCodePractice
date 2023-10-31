
// TC: 0(N) where N length of string
// SC: 0(N)
class Solution {
private:
    bool isValid(char st, char str) {
        if ((st == '(' && str == ')') || (st == '{' && str == '}') || (st == '[' && str == ']')) return true;
        return false;
    }
public:
    bool isValid(string s) {
        stack<char> stack;

        for (char str : s) {
            if (!stack.empty() && isValid(stack.top(), str)) {
                cout << stack.top() << endl;
                stack.pop();
            } else {
                stack.push(str);
            }
        }

        return stack.empty();
    }
};
