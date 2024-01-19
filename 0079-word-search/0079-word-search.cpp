// TC: O(M * N)  where n is the number of rows and m is the number of columns in board
class Solution {
private:
    vector<int> dir = {-1, 0, 1, 0, -1};
    void dfs(vector<vector<char>>& board, int xi, int yj, int idx, string &word) {
        if(idx == word.size()) {
            find = true; return; 
        }
        if (xi < 0 || xi >= board.size() || yj < 0 || yj >= board[0].size() || board[xi][yj] == '#') return;
        if(board[xi][yj] == word[idx]) {
            board[xi][yj] = '#';
            for(int c = 0; c < 4; c++) {
                int new_xi = xi + dir[c];
                int new_yj = yj + dir[c + 1];
                dfs(board, new_xi, new_yj, idx + 1, word);
            };
            board[xi][yj] = word[idx];
        } else return;
        
    }
public:
    bool find = false;
    bool exist(vector<vector<char>>& board, string word) {
        for(int i = 0; i < board.size(); i++) {
            for(int j = 0; j < board[i].size(); j++) {
                if(board[i][j] == word[0]) {
                    dfs(board, i, j, 0, word);
                }
            }
        }
        return find;
    }
};