
// TC: 0(NlogN)
// SC: 0(N)
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        vector<vector<int>> nOintervals;
        sort(intervals.begin(), intervals.end());

        vector<int> newInterval = intervals[0];
        nOintervals.push_back(newInterval);

        for(auto interval: intervals) {
            if(newInterval[1] >= interval[0]) {
                nOintervals[nOintervals.size() - 1][1] = max(newInterval[1], interval[1]);
                newInterval = nOintervals[nOintervals.size() - 1];
            }
            else {
                newInterval = interval;
                nOintervals.push_back(newInterval);
            }
        };

        return nOintervals;
    }
};