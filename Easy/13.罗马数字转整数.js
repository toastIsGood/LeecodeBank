/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let params = s.split('')
    let res = 0
    for (let i = 0 ; i < params.length ; i++) {
        if( params[i] === 'I') {
            if( params[i+1] === 'V' ) {
                res += 4
                i++
            } else if ( params[i+1] === 'X' ) {
                res += 9
                i++
            } else {
               res += 1 
            }
            continue;
        } else if ( params[i] === 'V' ) {
            res += 5
            continue;
        } else if ( params[i] === 'X' ) {
            if( params[i+1] === 'L' ) {
                res += 40
                i++
            } else if ( params[i+1] === 'C' ) {
                res += 90
                i++
            } else {
               res += 10
            }
            continue;
        } else if ( params[i] === 'L' ) {
            res += 50
            continue;
        } else if ( params[i] === 'C' ) {
            if( params[i+1] === 'D' ) {
                res += 400
                i++
            } else if ( params[i+1] === 'M' ) {
                res += 900
                i++
            } else {
               res += 100
            }
            continue;
        } else if ( params[i] === 'D' ) {
            res += 500
            continue;
        } else if ( params[i] === 'M' ) {
            res += 1000
            continue;
        }
    }

    return res
};

