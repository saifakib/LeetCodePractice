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
    TreeNode* BSTBuilder(vector<int>& nums, int L, int R) {
        if(L > R) return nullptr;
        int M = L + (R - L) / 2;
        auto node = new TreeNode(nums[M]);
        node -> left = BSTBuilder(nums, L, M - 1);
        node -> right = BSTBuilder(nums, M + 1, R);
        return node;
    }
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return BSTBuilder(nums, 0, nums.size() - 1);
    }
};