/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// TC: 0(N)
// SC: 0(1)
class Solution {
public:
    bool hasCycle(ListNode *head) {
        auto fast = head;
        auto slow = head;

        while(fast && fast -> next) {
            fast = fast -> next -> next;
            slow = slow -> next;

            // if they are same node
            if(slow == fast) {
                return true;
            } 
        };
        return false;
    }
};