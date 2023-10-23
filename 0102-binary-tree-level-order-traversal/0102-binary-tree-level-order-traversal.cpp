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

// TC: 0(N)
// SC: 0(N)
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> levels;
        queue<TreeNode*> queue;
        if(root) queue.push(root);

        while(!queue.empty()) {
            vector<int> level;
            int level_size = queue.size();
            for(int i = 0; i < level_size; i++) {
                TreeNode* node = queue.front();
                queue.pop();

                if(node -> left) queue.push(node -> left);
                if(node -> right) queue.push(node -> right);

                level.push_back(node -> val);
            }
            levels.push_back(level);
        }

        return levels;
    }
};