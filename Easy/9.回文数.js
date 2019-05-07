/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let param = Number(x) > 0 ? x : 0 - Number(x)
    let rs = param.toString().split('').reverse().join('')
    if( rs === x.toString() ) {
        return true
    }else {
       return false
    }
}
