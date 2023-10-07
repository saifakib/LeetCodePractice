class Solution {
public:
    string reverseWords(string s) {
        istringstream iss(s);
        vector<string> ss{istream_iterator<string>{iss}, {}};
        string output;

        for(int i=0; i<ss.size(); i++) {
            cout << ss[i].length() << " " << ss[i] << endl;
            for(int j=ss[i].length()-1; j>-1; j--) {
                output += ss[i][j];
            };
            if(i < ss.size() - 1) {
                output += " ";
            }
            
        }

        return output;
    }
};