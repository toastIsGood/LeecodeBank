/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArray = nums1.concat(nums2)
    newArray.sort((a,b)=>{
        return a - b
    })
    let index = Number((newArray.length / 2 ).toFixed(0)) 
    let result = 0
    if( newArray.length % 2 !== 0 ) {
        result = newArray[index - 1]
    }else {
        result = ( newArray[index - 1] +newArray[index] ) / 2
    }
    return result
};

