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
// TC: O(N)  // N is the number of nodes
// MC: O(N)
class Solution {
private:
    TreeNode* BSTBuilder(vector<int>& inorder, int inStart, int inEnd, vector<int>& postorder, int postStart, int postEnd, unordered_map<int, int>& track) {
        if(inStart > inEnd || postStart > postEnd) return nullptr;
        auto root = new TreeNode(postorder[postEnd]);
        
        int inRoot = track[root -> val];
        int numsLeft = inRoot - inStart;
        
        root -> left = BSTBuilder(inorder, inStart, inRoot - 1, postorder, postStart, postStart + numsLeft - 1, track);
        root -> right = BSTBuilder(inorder, inRoot + 1, inEnd, postorder, postStart + numsLeft, postEnd - 1, track);
        
        return root;
        
    }
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        unordered_map<int, int> track;
        for(int i = 0; i < inorder.size(); i++) track[inorder[i]] = i;
        
        return BSTBuilder(inorder, 0, inorder.size() - 1, postorder, 0, postorder.size() - 1, track);
    }
};