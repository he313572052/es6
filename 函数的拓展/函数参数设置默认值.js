/**
 * 函数的拓展
 */
// 1.函数参数的默认值 § ⇧
function fn1(x = 'hello') {
    console.log(x);
}
fn1();
fn1('world');
//重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
let yy = 99;

function fn2(org0 = yy + 1) {
    console.log(org0)
}
fn2();
//1.1与解构赋值默认值结合使用 § ⇧
function fn3({ x, y = 5 } = {}) {
    console.log(x, y);
}
fn3()

function fn4(url, { body = '', method = 'get', header = {} } = {}) {

}
fn4('http://www.honpe.com');

function fn5(x, y = 5, z) { //默认参数必须放在最后
    return [x, y, z]
}
/*
console.log(fn5(1,,2));//报错
*/
//1.2函数的 length 属性  指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。
var len = (function(x, y, z) {}).length;
console.log(len);

/**
 * 函数参数默认值的应用
 */
//1.利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
function throwIfMissing() {
    throw new Error('缺少参数')
}

function fn1(agr0 = throwIfMissing()) {
    return agr0;
}

fn1(78999);

//2.可以将参数默认值设为undefined，表明这个参数是可以省略的。

function fn2(agr0 = undefined) {};