//1.generator 函数和语法
//，语法行为与传统函数完全不
function* helloWorldGenerator() {
    yield 'hello'; //yield 有记忆功能会会记忆上一次指针  yield函数 可以多次执行
    yield 'world';
    return 'ending'; //return 函数无记忆功能，只能执行一次
}
let hwg = helloWorldGenerator();
console.log(hwg.next());
console.log(hwg.next());
console.log(hwg.next());
console.log(hwg.next());

function* fn1() {
    yield 123 + 456
}
let fn11 = fn1();
console.log(fn11.next())
console.log(fn11.next())


// Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。

function* fn2() {
    console.log('执行了！')
}
let fn22 = fn2();
setTimeout(() => {
    fn22.next(); //调用next()方法时候函数才执行
}, 1000);
// yield表达式如果普通函数体内会报错
// yield表达式用在其他表达式内部必须用()
function* fn33() {
    // console.log('name=' + yield 'jack'); 报错
    console.log('name=' + (yield 'jack'));
};
//2.与 Iterator 接口的关系 § ⇧
var object1 = {};
object1[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};
[...object1] // [1, 2, 3]

function* fn4() {

}
let fn44 = fn4();
console.log(fn44 === fn44[Symbol.iterator]()); //true
// 3.next方法的参数
function* fn5() {
    for (let i = 0;; i++) {
        yield i;
        var reset
        if (reset) i = -1
    }
}
console.log('====================')
let fnn5 = fn5();
console.log(fnn5.next());
console.log(fnn5.next());
console.log(fnn5.next(true));