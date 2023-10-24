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
    vector<int> largestValues(TreeNode* root) {
        queue<TreeNode*> que;
        vector<int> largest;

        if(root) que.push(root);

        while(!que.empty()) {
            int large = INT_MIN;
            int level_size = que.size();

            for(int i = 0; i < level_size; i++) {
                auto node  = que.front();
                que.pop();

                if(node -> val > large) large = node -> val;
                if(node -> left) que.push(node -> left);
                if(node -> right) que.push(node -> right);
            };
            largest.push_back(large);
        }
        return largest;
    }
};