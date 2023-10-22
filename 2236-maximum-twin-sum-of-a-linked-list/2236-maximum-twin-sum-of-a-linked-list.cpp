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
private: 
    ListNode* reverseList(ListNode* head) {
        auto curr = head;
        ListNode* prev = nullptr;

        while(curr) {
            auto next = curr -> next;
            curr -> next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
public:
    int pairSum(ListNode* head) {
        auto dHead = new ListNode(0, head);
        auto slow = dHead;
        auto fast = dHead;

        while(fast && fast -> next) {
            fast = fast -> next -> next;
            slow = slow -> next;
        };

        // reverse from the mid of the list
        auto mid_head = reverseList(slow -> next);
        int max_pair_sum = 0;

        while(mid_head) {
            max_pair_sum = max(max_pair_sum, head -> val + mid_head -> val);
            head = head -> next;
            mid_head = mid_head -> next;
        }

        // again reverse from the mid
        reverseList(slow -> next);

        return max_pair_sum;
    }
};