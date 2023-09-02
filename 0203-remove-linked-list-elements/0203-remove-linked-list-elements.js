/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    if(head === []) return head;
    
    let current = head;
    let previous = null;
    
    while(current) {
        if(current.val === val) {
            if(current == head) {
                head = head.next;
                current = head;
            } else {
                previous.next = current.next;
                current = current.next;
            }
        } else {
            previous = current;
            if(current) {
                current = current.next
            }
        }
    }
    return head;
};
