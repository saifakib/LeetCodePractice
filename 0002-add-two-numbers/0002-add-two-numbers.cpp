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
// TC: 0(N)
// SC: 0(N)
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        auto dHead = new ListNode();
        auto curr = dHead;

        int carry = 0;
        while(l1 || l2 || carry != 0) {
            int sum = carry + (l1 ? l1->val : 0) + (l2 ? l2->val : 0);
            int digit = sum % 10;
            carry = sum / 10;

            auto newNode = new ListNode(digit);
            curr -> next = newNode;
            curr = curr -> next;

            if(l1) l1 = l1 -> next;
            if(l2) l2 = l2 -> next;
        };

        return dHead -> next;
    }
};