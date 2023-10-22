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
// TC: 0(1)
// SC: 0(1)
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        // create a dummy head
        auto dHead = new ListNode(0, head);
        // copy dummy head
        auto cDhead = dHead;
        auto fast = dHead;
        auto slow = dHead;

        while(n--) {
            fast = fast -> next;
        }

        while(fast && fast -> next) {
            fast = fast -> next;
            slow = slow -> next;
        }

        slow -> next = slow -> next -> next;

        // return dummy head next
        return cDhead -> next;;
    }
};