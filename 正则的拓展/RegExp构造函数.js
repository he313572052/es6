/**
 * RegExp构造函数
 */
//es5的构造函数

var reg1 = new RegExp('abc','i');

var reg2 = new RegExp('/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/');

//es6的构造
var reg3 = new RegExp('/abc/','i');
//1 u 修饰符
//会正确处理四个字节的 UTF-16 编码。
//2.点字符
/***************************************/	
//10.具名组匹配
/**
 const REG1 = /(\d{4})-(\d{2})-(\d{2})/;
 let matchObj =   REG1.exec('2017-10-26');
 console.log(matchObj[0]);
 console.log(matchObj[1]);
 console.log(matchObj[2]);

 const REG2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;//给租命名   ?<组名>   *次为提按
 const matchObj1 = REG2.exec('1989-11-14');
 const year = matchObj.groups.year;
 console.log(year+'年');**/
 











