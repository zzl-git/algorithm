// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

var str = 'abcabcbb';
var num = 0;
function numFunc(str){
    var target = [];
    var arr = str.split('');
    for(var i=0; i<arr.length; i++) {
        if(target.includes(arr[i])) {
            if(num< target.length) {
                num = target.length
            }
            break;
        }else {
            target.push(arr[i])
        }
    }
    if(arr.length>num+1) {
        str = arr.slice(1).join('');
        numFunc(str)
    }
    if(num< target.length) {
        num = target.length
    }
}
numFunc(str)
console.log(num);