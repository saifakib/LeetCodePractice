class Solution {
public:
    class TrieNode {
        public:
        TrieNode* next[26];
        string word;
        TrieNode() {
            word = "";
            fill(begin(next), end(next), nullptr);
        }
    };
     class Trie {
        public:
            TrieNode* root;
            Trie() {
                root = new TrieNode();
            }
            void insert(string &word) {
                auto curr = root;
                for(auto &ch: word) {
                    int rnk = ch - 'a';
                    if(curr -> next[rnk] == nullptr) {
                        curr -> next[rnk] = new TrieNode();
                    }
                    curr = curr -> next[rnk];
                }
                curr -> word = word;
            }
    };
    Trie* buildTrie(vector<string>& words) {
        Trie* trie = new Trie();
        for(auto &word: words) {
            trie -> insert(word);
        };
        return trie;
    }
    vector<int>dir = {1, 0, -1, 0, 1};
    void dfs(vector<vector<char>>& board, int i, int j, TrieNode* node, vector<string> &results) {
        auto ch = board[i][j];
        if(node -> next[ch - 'a'] == nullptr) return;
        node = node -> next[ch - 'a'];
        if(node -> word.size() > 0) {
            results.push_back(node -> word);
            node -> word = "";
        }
        board[i][j] = '#';
        for(int c = 0; c < 4; c++) {
            int xi = i + dir[c];
            int yj = j + dir[c + 1];
            if (xi < 0 || xi >= board.size() || yj < 0 || yj >= board[0].size() || board[xi][yj] == '#') continue;
            dfs(board, xi, yj, node, results);
        }
        board[i][j] = ch;
    }
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        auto trie = buildTrie(words);
        vector<string> results;
        for(int i = 0; i < board.size(); i++) {
            for(int j = 0; j < board[i].size(); j++) {
                dfs(board, i, j, trie -> root, results);
            }
        };
        return results;
    }
};