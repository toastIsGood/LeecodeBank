/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let result = [] 
    let count = 0
    let stack = [root]
    let getLevelOrder = function(){
        if( root === null ) return 
        let noode = stack[count]
        if(noode) {
            let arr = []
            if(noode.left) {
                stack.push(noode.left)
                arr.push(noode.left.val)
            }
            if(noode.right) {
                stack.push(noode.right)
                arr.push(noode.right.val)
            }
            result.push(arr)
            count++;
            getLevelOrder()
        }
    }
    getLevelOrder()
    return result
};

