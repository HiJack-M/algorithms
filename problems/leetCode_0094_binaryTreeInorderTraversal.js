/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let stack = [];
    let ans = [];

    while (root || stack.length > 0) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            let item = stack.pop();
            ans.push(item.val);
            root = item.right;
        }
    }
    return ans;
};
