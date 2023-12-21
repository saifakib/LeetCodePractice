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
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> result;
        queue<TreeNode*> Q;
        bool reverseOrder = false;
        if (root) Q.push(root);
        
        while (!Q.empty()) {
            int levelSize = Q.size();
            vector<int> levelValue;
            for (int i = 0; i < levelSize; i++) {
                auto node = Q.front(); Q.pop();
                if (node->left) Q.push(node->left);
                if (node->right) Q.push(node->right);
                levelValue.push_back(node->val);
            }
            if (reverseOrder) {
                reverse(levelValue.begin(), levelValue.end());
            }
            result.push_back(levelValue);
            reverseOrder = !reverseOrder;
        } 
        return result;
    }
};

