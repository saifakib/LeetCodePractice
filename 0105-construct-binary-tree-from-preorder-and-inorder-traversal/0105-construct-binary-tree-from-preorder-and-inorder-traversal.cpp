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
// TC: O(N)     // N is the number of nodes
// MC: O(N)
class Solution {
private: 
    TreeNode* BSTBuilder(vector<int>& preorder, int preStart, int preEnd, vector<int>& inorder, int inStart, int inEnd, unordered_map<int, int>& track) {
        if(preStart > preEnd || inStart > inEnd) return nullptr;

        auto root = new TreeNode(preorder[preStart]);
        int inRoot = track[root -> val];
        int left = inRoot - inStart;

        root -> left = BSTBuilder(preorder, preStart + 1, preStart + left, inorder, inStart, inRoot - 1, track);
        root -> right = BSTBuilder(preorder, preStart + left + 1, preEnd, inorder, inRoot + 1, inEnd, track);
        
        return root;
    }
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        unordered_map<int, int> track;
        
        for(int i = 0; i < inorder.size(); i++) {
            track[inorder[i]] = i;
        }
        
        TreeNode* root = BSTBuilder(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1, track);
        return root;
    }
};