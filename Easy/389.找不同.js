/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let t_arr = t.split('');
    for (let char of s) {
        if (t_arr.includes(char)) {
            t_arr.splice(t_arr.indexOf(char), 1);
        }
    }
    return t_arr[0];
};

