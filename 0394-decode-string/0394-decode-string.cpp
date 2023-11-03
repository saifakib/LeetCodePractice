class Solution {
public:
    string decodeString(string s) {
        stack<pair<string, int>> stck;
        stck.push({"", 1});
        int times = 0;

        for(auto ch: s) {
            if (isdigit(ch)) {
                times = (times * 10) + (ch - '0');
            } 
            else if (ch == '[') {
                stck.push({"", times});
                times = 0;
            }
            else if( ch == ']') {
                string str = stck.top().first;
                int repeat_time = stck.top().second;
                stck.pop();

                while(repeat_time--) {
                    stck.top().first += str;
                }
            }
            else {
                stck.top().first.push_back(ch);
            }
        }

        return stck.top().first;
    }
};