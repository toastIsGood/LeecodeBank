/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let param = Number(x) > 0 ? x : 0 - Number(x)
    let rs = param.toString().split('').reverse().join('')
    if( Number(x) > 0 ) {
        rs = Number(rs)
    }else {
        rs = 0 - Number(rs)
    }
    
    let res = parseInt(rs)
    if (res>Math.pow(2,31)-1 || res< -Math.pow(2,31)) {
        return 0
    }else {
        return rs
    }
};  

