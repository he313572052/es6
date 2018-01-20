/**
 * New node file
 */
console.log(foo);//undefined,var 声明的变量可以先使用，但是打印出undefined
var foo = 123;

let foot = 123;
try{
	console.log(foot);//报错,let声明的变量必须在声明后方可使用
}catch(error){
	console.log('let声明的变量必须在声明后方可使用')
}


//暂时性死区
var temp ;
//let和const 声明的变量在声明之前都不可以使用，也不能赋值
try{
	if(true){
		temp='123';
		let temp;
	}
}catch(error){
	console.log('let和const 声明的变量在声明之前都不可以使用，也不能赋值');
}

//let在代码块中不允许重复声明
try{
	let x= 1
	//let x = 2;
	
}catch(error){
	console.log('let在代码块中不允许重复声明');
}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		