'use strict';

/**
 * 字符串的拓展
 */
//1.字符的 Unicode § ⇧ 表示法   JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点   备注： 作用不大
//2.codePointAt() § ⇧ 备注： 作用不大
//3.String.fromCodePoint() § ⇧
//4.字符串的遍历器接口§ ⇧
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = 'dfghjkl;'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var chat = _step.value;

    console.log(chat);
  }
  //5.ChatAt() § ⇧返回字符串给定位置的字符
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log('sdfghjkl'.charAt(5));
//6.normalize() § ⇧ 备注： 作用不大
//7.includes(), startsWith(), endsWith() § ⇧
console.log('sdfghjkl'.includes('ghj')); //检测是否包含指定字符串
console.log('sdfghjkl'.endsWith('kl')); //头部检测是否包含指定字符串
console.log('sdfghjkl'.startsWith('sd')); //尾部检测是否包含指定字符串
//8.repeat() § ⇧ repeat方法返回一个新字符串，表示将原字符串重复n次。
console.log('x'.repeat(5));
console.log('hello'.repeat(5));
//9.padStart()，padEnd() § ⇧ 
console.log('x'.padStart(5, 'ab')); //头部补全
console.log('x'.padEnd(5, 'ab')); //尾部补全
//10.模板字符串 § ⇧ 备注：相当好用
/**
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
*/
