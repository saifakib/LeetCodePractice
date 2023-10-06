class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        map<int, int> obj;
        priority_queue<int, vector<int>, less<int>> pq;
        
        for (int i = 0; i < score.size(); i++) {
            pq.push(score[i]);
            obj[score[i]] = i;
        }

        int count = 0;
        vector<string> response(score.size());
        while (!pq.empty()) {
            int topValue = pq.top();
            pq.pop();
            
            if (count == 0) {
                response[obj[topValue]] = "Gold Medal";
            } else if (count == 1) {
                response[obj[topValue]] = "Silver Medal";
            } else if (count == 2) {
                response[obj[topValue]] = "Bronze Medal";
            } else {
                response[obj[topValue]] = to_string(count + 1);
            }
            
            count++;
        };
        return response;
    };
};