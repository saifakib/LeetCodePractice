/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let size = 0;
    let start;
    let count = 0;
    let current = head;
    
    while(current) {
        current = current.next;
        size++;
    }
    
    if(size%2 == 0) {
        start = (size/2);
    } else {
        start = Math.floor(size/2);
    }
    let traverse = head;
    
    while(count < start) {
        traverse = traverse.next;
        count++;
    }
    head = traverse;
    return head;
    
};