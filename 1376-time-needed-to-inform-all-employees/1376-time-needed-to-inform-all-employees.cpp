// TC: O(N)
// MC: O(N) for the adjacency list.
class Solution {
public:
    vector<vector<int>> adj;
    int numOfMinutes(int n, int headID, vector<int>& manager, vector<int>& informTime) {
        adj.clear();
        adj.resize(n);
        for (int i = 0; i < n; i++) {
            if (manager[i] != -1) adj[manager[i]].push_back(i);
        }
        return informTime[headID] + dfs(headID, informTime);
    }
private:
    int dfs(int& headID, vector<int>& informTime) {
        int minutes = 0;
        for(auto id: adj[headID]) {
            minutes = max(minutes, informTime[id] + dfs(id, informTime));
        }
        return minutes;
    }
};