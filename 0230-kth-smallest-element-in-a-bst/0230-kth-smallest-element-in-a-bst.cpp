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
private:
    class BSTIterator {
        private:
            TreeNode* root;
            stack<TreeNode*> nodeStack;
        public:
            BSTIterator(TreeNode* _root) {
                root = _root;
                auto curr = root;
                while(curr) {
                    nodeStack.push(curr);
                    curr = curr -> left;
                }
            };
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
public:
    int kthSmallest(TreeNode* root, int k) {
        auto bst = new BSTIterator(root);
        int result;
        for(int i = 1; i <= k; i++) {
            result = bst -> genNext();
        };
        return result;
    }
};