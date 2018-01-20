function* fn6(x) {
        var y = 2 * (yield(x + 1))
        var z = yield(y / 3);
        return (x + y + z);
    }
    /* 
    var fn66 = fn6(5);
    console.log(fn66.next()); // { value: 6, done: false }
    console.log(fn66.next()); // { value: NaN, done: false }
    console.log(fn66.next()); */ // { value: NaN, done: true }
var fn66 = fn6(5);
console.log(fn66.next()); // 注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的
console.log(fn66.next(12)); // yield(x + 1) = 12
console.log(fn66.next(13)); // (y / 3) = 13  z = 13   x= 5 y = 24



//7. Generator.prototype.throw() § ⇧
// Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
function* fn7() {
    try {
        yield;
    } catch (error) {
        console.log('内部捕获', error);

    }
}
let fnn7 = fn7();
fnn7.next();
try {
    // fnn7.throw(new Error('出错了')); //throw可以接收参数被内部的catch捕获
    fnn7.throw('b');
} catch (error) {
    console.log('外部捕获', error)
}
// 8.Generator.prototype.return() § ⇧
// Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。
function* fn8(x) {
    yield 12;
    yield 15;
    yield 16;
    return 56;
}
let fnn8 = fn8();
console.log(fnn8.next());
console.log(fnn8.return(10)); //不提供参数返回value undefined;
console.log(fnn8.next());
console.log('================');

// 9.yield* 表达式 § ⇧
// 如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。

function* fn9() {
    yield '12';
    yield '13';
    return '14';
}

function* fn10() {
    yield '122';
    yield* fn9(); //  fn9(); 无效果
    yield fn9();
    yield '133';
    return '144';
}
let fnn10 = fn10();
console.log(fnn10.next().value);
console.log(fnn10.next().value);
console.log(fnn10.next().value);
// for (let fn of fnn10) {
//     console.log(fn);
// }
// 10.作为对象属性的Generator函数 § ⇧
let obj = {
    * fn() {} //表示此方法是一个generator函数
};
//11.Generator 函数的this § ⇧
// Generator 函数返回的是一个遍历器对象不是 本对象
function* gen() {
    this.name = 'jack';
}
let g = gen();
console.log(g.name); //undefined