/**
 * 对象的解构赋值
 */
let {name,age} = {name:'jack',age:18}
console.log(name);//jack
console.log(age);//18
//变量名和属性名不一致的时候
let {name:naz} = {name:'rose'}
console.log(naz);

//数组
let [a,b,c] = [1,2,3]
//对象
let { foo, bar } = { foo: "aaa", bar: "bbb" };
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };

//字符串解构
const [aa, bb, cc, dd, ee] = 'hello';
console.log(aa);//h
//函数的解构
function add([x,y]){
	return x+y;
}
console.log(add([1,2]));
let xx = [[1,2],[3,4]].map(([a,b])=>a+b)
console.log(xx);//[ 3, 7 ]