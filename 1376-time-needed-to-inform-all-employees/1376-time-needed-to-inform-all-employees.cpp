class Solution {
public:
    int numOfMinutes(int n, int headID, vector<int>& manager, vector<int>& informTime) {
        adj.resize(n);
        int time = 0;
        for(int i = 0; i < n; i++) {
            if(manager[i] == -1) time += informTime[i];
            else adj[manager[i]].push_back(i);
        };
        return time + dfs(headID, informTime);;
    }
private:
    vector<vector<int>> adj;
    int dfs(int& headID, vector<int>& informTime) {
        int minutes = 0;
        for(auto id: adj[headID]) {
            minutes = max(minutes, informTime[id] + dfs(id, informTime));
        }
        return minutes;
    }
};