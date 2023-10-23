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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        auto dHead = new ListNode();
        auto cHead = dHead;

        while(list1 && list2) {
            if(list1 -> val > list2 -> val) {
                cHead -> next = list2;
                list2 = list2 -> next;
            }
            else if(list1 -> val < list2 -> val) {
                cHead -> next = list1;
                list1 = list1 -> next;
            }
            else {
                cHead -> next = list2;
                list2 = list2 -> next;
            }
            cHead = cHead -> next;
        };

        while(list1 || list2) {
            cHead -> next = list1 ? list1 : list2;
            cHead = cHead -> next;
            if(list1) list1 = list1 -> next;
            if(list2) list2 = list2 -> next;
        }
        return dHead -> next;
    }
};