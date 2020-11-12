// 给定两个大小为 m 和 n 的正序（从小到大）
// 数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
// **进阶：**你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？


// 完全看不懂  二分法  暴力解能看懂
// https://mp.weixin.qq.com/s/comAcblY7WJy3TQ3v6S2ZQ

function getMid(arr1, arr2) {
    const arr =[];
    const l1 = arr1.length;
    const l2 = arr2.length;
    const len = l1> l2? l2: l1;
    for(let i=0; i< len; i++) {
        if(arr1[i]>arr2[i]) {
            arr.push(arr2[i])
            arr.push(arr1[i])
        }else {
            arr.push(arr1[i])
            arr.push(arr2[i])
        }
    }
    if (l1> l2) {
        return [...new Set([...arr, ...arr1])]
    }else {
        return [...new Set([...arr, ...arr2])]
    }
}
var nums1 = [1,3], nums2 = [2,4]
console.log(getMid(nums1, nums2));