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
// TC: 0(1)
class Solution {
private: 
    ListNode* reverseList(ListNode* head) {
        auto curr = head;
        ListNode* prev = nullptr;

        while(curr) {
            auto nxt = curr -> next;
            curr -> next = prev;
            prev = curr;
            curr = nxt;
        };
        return prev;
    }
public:
    void reorderList(ListNode* head) {
        if(!head -> next) return;
        auto slow = head;
        auto fast = head -> next -> next;
        int count = 0;

        while(fast && fast -> next) {
            fast = fast -> next -> next;
            slow = slow -> next;
            count++;
        };

        auto mid_head = reverseList(slow -> next);
        auto cHead = head;

        while(count--) {
            auto nxt = cHead -> next;
            cHead -> next = mid_head;
            mid_head = mid_head -> next;
            cHead -> next -> next = nxt;
            cHead = cHead -> next -> next ;
        };

        while(mid_head) {
            cHead -> next = mid_head;
            mid_head = mid_head -> next;
            cHead = cHead -> next;
        }
    }
};