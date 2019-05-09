/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] m
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if( root === null ) {
        return 0
    } else {
        let leftDepth = maxDepth(root.left)
        let rightDepth = maxDepth(root.right)
        let result = leftDepth > rightDepth ? leftDepth : rightDepth
        return result + 1
    }
};

