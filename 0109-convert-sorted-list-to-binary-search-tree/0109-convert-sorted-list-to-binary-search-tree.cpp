/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
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
    TreeNode* BSTBuilder(ListNode* head, ListNode* end) {
        if (head == end) return nullptr;
        auto slow = head;
        auto fast = head;
        
        while (fast != end && fast->next != end) {
            fast = fast->next->next;
            slow = slow->next;
        }
        auto root = new TreeNode(slow->val);
        root->left = BSTBuilder(head, slow);
        root->right = BSTBuilder(slow->next, end);
        
        return root;
}
public:
    TreeNode* sortedListToBST(ListNode* head) {
        return BSTBuilder(head, nullptr);
    }
};