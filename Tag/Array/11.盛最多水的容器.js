/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let right = height.length - 1 
    let result = 0
    for (let i = 0 ; i < height.length; i++) {
        let containHeight = height[i] < height[right] ? height[i] : height[right]
        result = result > containHeight * ( right - i) ? result : containHeight * ( right - i)
        if( height[i] > height[right] ) {
            i--;
            right = right - 1
        }
    } 
    return result
};


