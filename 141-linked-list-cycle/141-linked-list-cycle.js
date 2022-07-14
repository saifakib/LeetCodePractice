/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let [fastNode,slowNode] = [head, head];
    
    while(fastNode && fastNode.next && fastNode.next.next) {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
        
        if(fastNode == slowNode) return true
    }
    return false;
};