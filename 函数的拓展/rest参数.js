/**
 * 3.rest参数
 * 可变参数，实际上是一个数组，会将多余的参数放到数组中
 */
'use strict'; //使用严格模式

function fn1(url, ...args) {
    console.log(url);
    console.log(args);
}

fn1(1, 2, 3, 4, 5, 6, 7);

//4.name属性
console.log(fn1.name); //获取函数名

//5.箭头函数
//es5写法
(function(x) {
    console.log(x)
})(15);
//es6写法
((x) => {
    console.log(x)
})(10);

//6.双冒号运算符

//7.尾调用优化           尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
function f(x) {
    if (x > 0) {
        return m(x)
    }
    return n(x);
}
//m和n都属于尾调用 都是最后调用
//8.尾递归
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)) // 120
    //尾递归优化
    // 非尾调递归写法
    // function factorial(n) {
    // 	if (n === 1) return 1;
    // 	return n * factorial(n - 1);
    //   }

function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}

factorial(5, 1) // 120
    //8.函数参数的尾逗号 § ⇧
function fn3(agrs0, args1, ) {
    console.log(agrs0 + '==' + args1)
}
fn3(89, 78);