class Trie {
public:
    class TrieNode {
        public:
            bool isEnd;
            TrieNode* next[26];
            TrieNode() {
                isEnd = false;
                fill(begin(next), end(next), nullptr);
            }
    };
    TrieNode* root;
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        auto curr = root;
        for(auto &w: word) {
            if(curr -> next[w - 'a'] == nullptr) {
                curr -> next[w - 'a'] = new TrieNode();
            }
            curr = curr -> next[w - 'a'];
        }
        curr -> isEnd = true;
    }
    
    bool search(string word, bool startWith = false) {
        auto curr = root;
        for(auto &w: word) {
            if(!curr -> next[w - 'a']) return false;
            curr = curr -> next[w - 'a'];
        }
        return startWith || curr -> isEnd;
    }
    
    bool startsWith(string prefix) {
        return search(prefix, true);
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */