/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -Number.MAX_VALUE;
    var sum = 0;
    for (let num of nums) {
      if (sum < 0) {
        sum = 0;
      }
      sum += num;
      max = Math.max(max, sum);
    }
    return max;
  }

