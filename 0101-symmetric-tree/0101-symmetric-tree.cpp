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
// O(N) // N is the number of nodes
// O(H) // Tree height
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        return isMirror(root -> left, root -> right);
    }
private:
    bool isMirror(TreeNode* left, TreeNode* right) {
        if(!left && !right) return true;
        if(!left || !right) return false;
        return (left -> val == right -> val) && isMirror(left -> left, right -> right) && isMirror(left -> right, right -> left);
    }
};