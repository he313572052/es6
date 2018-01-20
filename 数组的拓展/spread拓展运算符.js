/**
 * 数组的拓展
 */
// 1.拓展运算符 spread
console.log(1, ...[1, 2, 56, 89]);
console.log(1, ...[2, 5, 8, 89], 89);
// 1.1 通过...将数组转化成参数数列 不需要额外使用apply()方法转化
let arr = [2, 3, 4, 5, 6];
let max1 = Math.max.apply(null, arr); //求数组中的最大元素
console.log(max1); //6
// 通过spread 推展运算符的方式
let max2 = Math.max(...arr); //6
console.log(max2 + '==========');
// 1.2 复制数组  数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。
let arr1 = [1, 2, 3];
let arr2 = arr1.concat();
// 通过spread实现
let arr3 = [...arr1];
console.log(arr3);
//1.3合并数组
let arr4 = [78, 85, 74, 45];
//es5写法合并数组
let arr5 = arr.concat(arr4);
console.log(arr5);
//es6写法
let arr6 = [...arr, ...arr4];
console.log(arr6);
console.log('====================');
//1.4与解构赋值组合
let [ar1, ...ar2] = [2, 5, 6, 7, 8, 9];
console.log(ar1);
console.log(ar2);
//1.5将字符串转化成数组
let strArr = [...
    'hello'
];
console.log(strArr);
//1.6 实现了 Iterator 接口的对象
/**
 * let nodeList = document.querySelectorAll('div');
 * let nodeArr = [...nodeList]; 
 */
//1.7 Map 和 Set 结构，Generator 函数
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
])
let keyArr = [...map.keys()];
console.log(keyArr);