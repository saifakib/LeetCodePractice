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
    vector<int> inOrder(TreeNode* root) {
         if (root == nullptr) return {}; 
        vector<int> result;
        vector<int> left = inOrder(root->left);
        result.insert(result.end(), left.begin(), left.end());
        result.push_back(root->val);
        vector<int> right = inOrder(root->right);
        result.insert(result.end(), right.begin(), right.end());
        return result;
    }
public:
    vector<int> inorderTraversal(TreeNode* root) {
        return inOrder(root);
    }
};