/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        int result;
        auto bst = new BSTBuilder(root);
        for(int i = 0; i < k; i++) {
            result = bst -> genNext();
        }
        return result;
        
    }
private:
    class BSTBuilder {
        private:
            TreeNode* root;
            stack<TreeNode*> nodeStack;
        public:
            BSTBuilder(TreeNode* _root) {
                root = _root;
                auto curr = root;
                while(curr) {
                    nodeStack.push(curr);
                    curr = curr -> left;
                }
            }
            int genNext() {
                auto node = nodeStack.top(); nodeStack.pop();
                auto curr = node -> right;
                while(curr) {
                    nodeStack.push(curr);
                    curr = curr -> left;
                }
                return node -> val; 
            }
     };
};