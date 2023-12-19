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
    int counter, result;
    void inOrderDFS(TreeNode* root, int k) {
        if (root == nullptr) return;
        inOrderDFS(root -> left, k);
        counter++;
        if(counter == k) result = root -> val;
        inOrderDFS(root -> right, k);
    }
    int kthSmallest(TreeNode* root, int k) {
        inOrderDFS(root, k);
        return result;
    }
};