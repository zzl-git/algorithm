// 给定一个整数数组 nums 和一个目标值 target，请你
// 在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
const nums  = [2, 7, 11, 15];
const target = 26;
function allCount(nums, target) {
    const map =new Map();//es6 map 方法
    for(let i= 0; i<nums.length;i ++) {
        const diff = target - nums[i];
        if(map.has(diff)) {
            return [map.get(diff), i];
        }else {
            map.set(nums[i], i);
        }
    }
}
console.log(allCount(nums, target));

function allCount2(nums, target) {
    for(let i=0; i< nums.length; i++) {
        for(let g= i+1; g<nums.length; g++)  {
            if(target === nums[i]+nums[g] && i!==g) {
                return [i, g]
            }
        }
    }
}
console.log(allCount2(nums, target));