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
    void BSTTraverse(TreeNode* root) {
        if(root == nullptr) return;
        BSTTraverse(root -> left);
        NodeVCount[root -> val]++;
        BSTTraverse(root -> right);
    }
public:
    map<int, int> NodeVCount;
    int findSecondMinimumValue(TreeNode* root) {
        BSTTraverse(root);
        if(NodeVCount.size() < 2) return -1;
        int count = 0;
        int resultVal;
        for(auto val: NodeVCount) {
            count++;
            resultVal = val.first;
            if(count == 2) break;
        }
        return resultVal;
    }
};