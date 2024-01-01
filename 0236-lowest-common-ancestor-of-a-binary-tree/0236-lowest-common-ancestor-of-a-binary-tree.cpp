/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
// TC: O(N) // number of nodes
// MC: O(H) // tree height 
class Solution {
private:
    TreeNode* findLCA(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == nullptr) return nullptr;
        if(root -> val == p -> val || root -> val == q -> val) return root;
        auto left = findLCA(root -> left, p, q);
        auto right = findLCA(root -> right, p, q);
        if(left && right) return root;
        return left ? left : right;
    }
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        return findLCA(root, p, q);
    }
};