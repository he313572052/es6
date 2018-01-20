/* 数组的拓展 */
/* 2.Array.from() § ⇧ */
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}
var arr = Array.from(arrayLike);
console.log(arr);
/* 实际应用中，常见的类似数组的对象是DOM操作返回的NodeList集合，
以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。 */
/* 3. Array.of() § ⇧ */
// Array.of方法用于将一组值，转换为数组。
let arrOf = Array.of(1, 2, 3, 4, 5, 6);
console.log(arrOf);
/* 4.  数组实例的 copyWithin() § ⇧ */
let arr1 = [78, 88, 98, 56, 45, 12, 85];
let arr2 = arr1.copyWithin(1, 3, 5); //从读取4,5下标的数值，替换1,2下标的数值;
console.log('====================');
console.log(arr2);
//5. 数组实例的 find() 和 findIndex() § ⇧
let num = [1, 4, 5, 8].find((x) => x >= 5) //数组中查找出符合条件的第一个元素  
console.log(num);

let index = [1, 4, 5, 8].findIndex((x) => x >= 5) //数组中查找出符合条件的第一个元素的索引
console.log(index);

//6.数组实例的fill() § ⇧ 填充  用途初始化数组
console.log([1, 2, 3, 4, 5, 6].fill(10)) //Array(6) [10, 10, 10, 10, 10, 10]
console.log([1, 2, 3, 4, 5, 6].fill('a', 4)); //Array(6) [1, 2, 3, 4, "a", "a"]  可以指定填充的位置
console.log([1, 2, 3, 4, 5, 6].fill('a', 3, 5)); //Array(6) [1, 2, 3, "a", "a", 6]
console.log('====================');
//7.数组实例的 entries()，keys() 和 values() § ⇧
// 7.1 keys();
for (let key of['a', 'b', 'c', 'd', 'e', 'f'].keys()) {
    console.log(key);
}
//测试有问题
//7.2 values();
/* for (let ele of['a', 'b', 'c', 'd', 'e', 'f'].values()) {
    console.log(ele);
} */

// 8.数组实例的 includes() § ⇧
//Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。ES2016 引入了该方法。
var boo = ['a', 'b', 'c', 'd', 'e', 'f'].includes('d');
console.log(boo);
//9.数组的空位