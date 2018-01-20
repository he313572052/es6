'use strict'
//输出变量
export const URL = 'http://www.honpe.com:8080/honpe';
//输出函数
export function handlerString(str) {
    return ''.toLocaleLowerCase();
}
//输出类
export class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    study() {
        console.log('good good study');
    }
    eat() {
        console.log('eat food');
    }
}

// as 关键字可以让变量和接口设置别名 对外暴露

export { URL as url }