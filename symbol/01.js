'use strict'
//Symbol
//1.Symbol 表示属性是独一无二,避免冲突
let sym = Symbol('abc');
console.log(sym)
console.log(typeof sym)
    //2.作为属性名的 Symbol § ⇧
let mySymbol = Symbol();
let obj = {
    [mySymbol]: '456'
};
// 3.实例：消除魔术字符串 § ⇧
let shapeType = {
    Triangle: Symbol()
};

function getArea(shape, options) {
    let area = 0;
    switch (shape) {
        case shape.Triangle: // 魔术字符串
            area = .5 * options.width * options.height;
            break;
            /* ... more code ... */
    }

    return area;
}
getArea(shapeType, { width: 100, height: 100 }); // 魔术字符串
//4.属性名的遍历 § ⇧
const obje1 = {
    [Symbol('name')]: 'jack', //作为属性名
    [Symbol('age')]: 25
}
let symbol_arr = Object.getOwnPropertySymbols(obje1);
console.log('======================')
console.log(symbol_arr);
// 由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
//5.Symbol.for()，Symbol.keyFor() § ⇧ 通过Symbol的描述名获取Symbol值
let s1 = Symbol('s');
let s2 = Symbol('s');
console.log(s1 === s2) //false Symbol()每次获取的Symbol值都是不一样
let s3 = Symbol.for('s');
let s4 = Symbol.for('s');
console.log(s3 === s4) //true Symbol.for()每次获取的值都是一样的

console.log(Symbol.for('name'));
//6.实例：模块的 Singleton 模式 § ⇧   就是单例模式
//7.内置的Symbol值 § ⇧