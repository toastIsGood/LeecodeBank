/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var index = digits.length - 1
    digits[index] = Number(digits[index]) + 1 
    for( let i = digits.length - 1 ; i >= 0 ; i--) {
        if( digits[i] >= 10) {
            if(i === 0) {
                digits[i] = 0 
                digits.unshift(1)
            }else {
                digits[i] = 0 
                digits[i-1] =  Number(digits[i-1]) + 1
            }
        }
    }
    return digits
};

