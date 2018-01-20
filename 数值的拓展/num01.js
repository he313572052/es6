/**
 * New node file
 */
//1.Number.isFinite(), Number.isNaN() § ⇧ 判断数值是否有限 

console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(15.8)) //true
console.log(Number.isNaN(NaN)); //true

//2.Number.parseInt(), Number.parseFloat() § ⇧ 字符串转化成整数和浮点数

console.log(Number.parseInt('5')); //es5的语法是parseInt();
console.log(Number.parseFloat('5.2')) //es5的语法是parseFloat() 
    //这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
    //3.Number.isInteger() § ⇧  用来判断一个值是否为整数

console.log(Number.isInteger(5.2)); //false
console.log(Number.isInteger(5)); //true
console.log(Number.isInteger('5')) //false
    //6.0  Number.EPSILON § ⇧ 常量  示1与大于1的最小浮点数之间的差。
console.log(Number.EPSILON); //没啥用
//6.1 安全整数和 Number.isSafeInteger() § ⇧
console.log(Math.pow(2, 53));
console.log(Math.pow(-2, 53));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
//7.Math对象的扩展 § ⇧ 
console.log(Math.trunc(5.24565)) //Math.trunc方法用于去除一个数的小数部分，返回整数部分。
let x = -5.68
console.log(Math.sign(x)); //判断一个数是正数负数还是零  正式返回1负数返回-1零返回0
console.log(Math.cbrt(8)) //Math.cbrt() § ⇧ 计算一个数的立方更
console.log(Math.fround(1.356)); //Math.fround方法返回一个数的单精度浮点数形式。
console.log(Math.hypot(2, 3, 4)); //Math.hypot方法返回所有参数的平方和的平方根。
//指数运算符
console.log(2 ** 2);
let a = 2;

console.log(a ** 3);