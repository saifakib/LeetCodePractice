
class Solution {
private:
    vector<int> dir = {1, 0, -1, 0, 1};
    void dfs(int ux, int uy, vector<vector<char>>& grid) {
        grid[ux][uy] = '0';
        for(int i = 0; i < 4; i++) {
            int vx = ux + dir[i];
            int vy = uy + dir[i + 1];
            if(vx < 0 || vy < 0 || vx >= grid.size() || vy >= grid[0].size() || grid[vx][vy] == '0') continue;
            dfs(vx, vy, grid);
        }
    }
public:
    int numIslands(vector<vector<char>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        int count = 0;
        
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) { 
                if(grid[i][j] == '1') {
                    dfs(i, j, grid);
                    count++;
                }
            }
        }
        return count;
    }
};