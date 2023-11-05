class Solution {
private:
    static bool comparator(int &a, int &b) {
        string sa = to_string(a);
        string sb = to_string(b);
        string sab = sa + sb;
        string sba = sb + sa;
        return sab > sba;
    }
public:
    // 0(nlogn);
    string largestNumber(vector<int>& nums) {
        // 0(nlogn) // n = length of nums;
        sort(nums.begin(), nums.end(), comparator);

        // after softing if large value is 0
        if(nums.size() > 0 && nums[0] == 0) return to_string(0);

        string largest = "";
        // 0(n)
        for(auto &num: nums) {
            largest += to_string(num);
        }
        return largest;
    }
};

