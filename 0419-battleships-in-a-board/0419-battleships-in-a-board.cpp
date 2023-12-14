class Solution {
private:
    vector<int>dir = {1, 0, -1, 0, 1};
    void dfs(vector<vector<char>>& board, int i, int j) {
        board[i][j] = '.';
        for(int c = 0; c < 4; c++) {
            int xi = i + dir[c];
            int yj = j + dir[c + 1];
            if (xi < 0 || xi >= board.size() || yj < 0 || yj >= board[0].size() || board[xi][yj] == '.') continue;
            dfs(board, xi, yj);
        }
    }
public:
    int countBattleships(vector<vector<char>>& board) {
        if(board.size() == 0 ) return 0;
        int count = 0;
        for (int i=0; i<board.size(); i++){
            for (int j=0; j<board[0].size();j++){
                if(board[i][j]=='X') {
                    count++;
                    dfs(board, i, j);
                }
            }
        }
        return count;
    }
};