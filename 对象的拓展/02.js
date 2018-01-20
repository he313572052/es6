'use strict'
// 9.supper关键字 this关键字指向当前对象 , supper 关键字指向 原型对象
// *注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。
const obj = {
    name: 'jack',
    say() {
        super.foot = '789';
        console.log('hello')
    },
    age: 25,
    score: 98
};
//10.Object.keys()，Object.values()，Object.entries() § ⇧
for (let key of Object.keys(obj)) { //获取对象所有属性名
    console.log(key);
}
console.log('===============')
for (let val of Object.values(obj)) { //获取对象的所有属性值
    console.log(val);
}
for (let [key, value] of Object.entries(obj)) {
    console.log(key + ' = ' + value)
}
//11.对象的扩展运算符 § ⇧
//11.1 对象的解构赋值
let {
    name,
    age,
    score
} = obj;
console.log('================')
console.log(name);
//1.2扩展运算符
let obj1 = { ...obj
};
console.log(obj1); //将obj对象中的属性和方法拷贝到obj1中
//12.Null 传导运算符 § ⇧  暂时是提案
function method({
    name,
    age
}) {
    console.log(name + '=======' + age);
}
method({
    name: 'jack',
    age: 18
});