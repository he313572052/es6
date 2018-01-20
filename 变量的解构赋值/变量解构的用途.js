/**
 * 变量解构的用途
 */
 //交货变量的值
 let x = 1;
 let y = 2;
 [x,y] = [y,x];
 console.log(x);
 console.log(y);
//从函数返回多个值
function re(){
	return [1,2,3];//类似于数组
}
let result = re();
console.log(result);
//

function re1(){
	return {
		foo:1,
		bar:2
	}
}
let result1 = re1();//类似于返回对象
console.log(result1);
//函数参数的定义
function f([x,y,z]){//
	console.log(x)
	console.log(y)
	console.log(z)
}
f([1,2,3])
function f1(x,y,z){//不知道和这个有啥区别，鸡肋
	console.log(x);
	console.log(y);
	console.log(z);
}
f1(1,2,3)

//提取json数据

let jsondata = {
	id:'0025',
	name:'tom',
	age:25
}

let {id,name,age} = jsondata;//作用很小
console.log(id);
console.log(name);
console.log(age);


//给函数赋默认值，很有用
jQuery.ajax = function(url, {
    async = true,
    beforeSend = function() {},
    cache = true,
    complete = function() {},
    crossDomain = false,
    global = true 
}) {
   	
};
//遍历Map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + 'is' + value);
}
for (let [key] of map) {
    console.log(key);
}
for (let [, value] of map) {
    console.log(value);
}
//输入模块的指定方法  很有用
const { SourceConsumer, sourceNode } = require('source-map');