/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    // Base Case
    if(root == null) return 0;
    
    const Ldepth = maxDepth(root.left);
    const Rdepth = maxDepth(root.right);
    
    if(Ldepth > Rdepth) {
        return (Ldepth + 1)
    } else {
        return (Rdepth + 1)
    }
};