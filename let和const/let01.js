/**
 * New node file
 */
{
	let a=123;
	var b=123;
	console.log(a);
	console.log(b)
}
console.log(b)
try{
	console.log(a);
}catch(error){
	console.log('a不再此作用域')
}

for(var i=0;i<100;i++){
}
console.log(i)//打印i为100,此时的i是全局变量

for(let j=0;j<100;j++){//此时的j为局部变量
	let j = 'abc'
	console.log(j);
}
try{
	console.log(j)
}catch(error){
	console.log('j不在作用域内')
}
