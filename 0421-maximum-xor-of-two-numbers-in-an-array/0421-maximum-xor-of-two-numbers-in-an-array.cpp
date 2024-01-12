// TC: O(M + N)  // M = tatol numbers size to contruct trie and N is length of nums.
// MC: O(M)
class Solution {
public:
    class TrieNode {
    public:
        int val;
        TrieNode* next[2];
        TrieNode() {
            val = 0;
            fill(begin(next), end(next), nullptr);
        }
    };
    
    class Trie {
    public:
        TrieNode* root;
        Trie() {
            root = new TrieNode();
        }
        void insert(int &num) {
            auto curr = root;
            for(int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;
                if(curr -> next[bit] == nullptr) {
                    curr -> next[bit] = new TrieNode();
                }
                curr = curr -> next[bit];
            }
            curr -> val = num;
        };
        int search(int &num) {
            auto curr = root;
            for(int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;
                if(curr -> next[!bit]) curr = curr -> next[!bit];
                else curr = curr -> next[bit];
            };
            return curr -> val;
        }
    };
    int findMaximumXOR(vector<int>& nums) {
        int maxXor = 0;
        Trie* trie = new Trie();
        trie -> insert(nums[0]);
        for(int i = 1; i < nums.size(); i++) {
            int b = nums[i];
            int best_a = trie -> search(b);     // O(31);
            maxXor = max(maxXor, best_a ^ b);
            trie -> insert(b);
        }
        return maxXor;
    }
};