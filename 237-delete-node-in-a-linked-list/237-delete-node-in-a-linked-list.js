/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // take a copy from next node
    // then implement it to our target node
    // then delete the next node
    
    let current = node;
    let nextNode = current.next;
    
    current.val = nextNode.val;
    current.next = nextNode.next;
};