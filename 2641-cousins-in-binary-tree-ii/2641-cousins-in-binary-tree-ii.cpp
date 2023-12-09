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
    TreeNode* replaceValueInTree(TreeNode* root) {
        root -> val = 0;
        queue<TreeNode* > Q;
        Q.push(root);
        vector<TreeNode*> buffer;
        while(!Q.empty()) {
            int levelSize = Q.size();
            int levelSum = 0;
            buffer.clear();
            while(levelSize--){
                auto node = Q.front(); Q.pop();
                buffer.push_back(node);
                
                if(node -> left) { Q.push(node -> left); levelSum += node -> left -> val; }
                if(node -> right) { Q.push(node -> right); levelSum += node -> right -> val; }
            }
            for(auto &node: buffer) {
                int siblingSum = 0;
                if(node -> left) siblingSum += node -> left -> val;
                if(node -> right) siblingSum += node -> right -> val;
                if(node -> left) node -> left -> val = levelSum - siblingSum;
                if(node -> right) node -> right -> val = levelSum - siblingSum;
            }
        }
        return root;
    }
};