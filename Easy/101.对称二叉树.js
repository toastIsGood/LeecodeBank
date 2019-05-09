/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) { 
    var isSameTree = function(p, q) {
        if( p === null && q === null ) return true 
        if( p !== null && q === null ) return false
        if( p === null && q !== null ) return false
        if( p.val !== q.val ) return false
        return isSameTree(p.left,q.right) && isSameTree(p.right,q.left)
    };
    return isSameTree(root,root)
};

