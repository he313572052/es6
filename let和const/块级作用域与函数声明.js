/**
 * 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，
 * 而不是函数声明语句。
 */
 
 //es6函数表达式
{
	function fn(){//这种方式会导致代码块内部的会改变外部的
		console.log('函数声明语句')
	}

}
fn();
{
	let fn1 = function(){//外面无法访问
		console.log('函数声明语句');
	}

}
fn1();

//ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。
// 不报错
'use strict';
if (true) {
  function f() {}
}

// 报错
'use strict';
if (true)
  function f() {}