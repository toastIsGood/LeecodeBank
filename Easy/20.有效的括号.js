/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let StringArray = []
    let targetArray = s.split('')
    for(let i = 0;i< targetArray.length;i++) {
       
        if( targetArray[i] === '{' || targetArray[i] === '[' || targetArray[i] === '(' ) {
            StringArray.push(targetArray[i])
        }else if ( targetArray[i] === '}' ) {
            if ( StringArray[StringArray.length-1] === '{') {
                StringArray.pop()
            }else {
                return false
            }
        }else if (targetArray[i] === ']' ) {
            if( StringArray[StringArray.length-1] === '[') {
                StringArray.pop()
            }else {
                return false
            }
        }else if (targetArray[i] === ')') {
            if( StringArray[StringArray.length-1] === '(' ){
                StringArray.pop()
            }else {
                return false
            }
        }
    }
    if (StringArray.length === 0) {
        return true
    }else {
        return false
    }
};
