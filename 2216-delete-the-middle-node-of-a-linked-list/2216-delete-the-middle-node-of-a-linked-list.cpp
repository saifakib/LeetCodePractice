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
 // SC: 0(1)
class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {

        if(head==NULL || head->next==NULL) return NULL;

        int count = 0;
        ListNode* temp = head;
        while(temp != NULL) {
            temp = temp -> next;
            count++;
        }

        // Need to go before node index for remove next
        int removeIndex = (count / 2) - 1;

        ListNode* cHead = head;
        while(removeIndex--) {
            cHead = cHead -> next;
        };

        ListNode* todelete = cHead->next;
        cHead->next = cHead->next->next;
        delete todelete;

        return head;
    }
};