/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
    if(n < 0) return '';
    if(n === 1 ) return '1';
    let result = '1'

    for ( let i = 1 ; i < n ; i++) {
        if( !result) {
            result = i
            continue;
        }
        let rs = ''
        let num = 1
        for( let j = 0 ; j < result.length; j++) {
            
            if ( result[j] === result[j + 1 ]) {
                num++
            }else {
                rs += num + '' + result[j]
                num = 1;
            }
        }
        result = rs
    }
    return result
};
