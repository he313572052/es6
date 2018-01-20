//set数据结果  特点：元素不重复
let set = new Set();
[1, 3, 8, 45, 23, 45, 23, 23].forEach((index) => set.add(index));
for (let ele of set) {
    // console.log(ele);
}
// 1.set实例的属性和方法
console.log(set.constructor);
console.log(set.size);
set.add('5');
set.add(5);
//{ 1, 3, 8, 45, 23, '5', 5 }
set.delete(8); //删除set中指定的元素
/* console.log(set);
console.log(set.has(5)); //判断set中是否有某个元素e
console.log(set.clear()); //清空set中的元素 */
// 2.遍历操作
// set.forEach((x) => console.log(x));
// for (let key of set.keys()) {
//     console.log(key);
// }
// for (let val of set.values()) {
//     console.log(val);
// }
// for (let item of set.entries()) {
//     console.log(item);
// }
// 遍历的应用
let set1 = new Set(['a', 'b', 'c', 'd', 'd']); //通过spread运算符生成无重复的数组
let arr1 = [...set];
// console.log(arr1);
// 数组的map和filter方法也可以用于 Set 了。
// console.log(arr1.map(x => x * 2));
// 2.weakSet  成员只能是对象不能是其他类型的值   weakset的元素对象是弱引用 weakSet的成员没法遍历
let arr2 = [
    [1, 2],
    ['a', 'b']
];
let ws = new WeakSet(arr2);
console.log(ws)
    // WeakSet的方法
let wsr = [9, 10]
ws.add(wsr);
ws.delete(wsr);
console.log(ws.has(wsr)); //true