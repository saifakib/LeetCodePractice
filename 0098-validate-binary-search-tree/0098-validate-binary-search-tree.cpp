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
    bool validateBST(TreeNode* root, long long l_min, long long r_max) {
        if(root == nullptr) return true;
        if(root -> val <= l_min || root -> val >= r_max) return false;
        return validateBST(root->left, l_min, root->val) && validateBST(root->right, root -> val, r_max);
    }
public:
    bool isValidBST(TreeNode* root) {
        return validateBST(root, LLONG_MIN, LLONG_MAX);
    }
};