import getTag from './.internal/getTag.js'

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * 检查分类为 Symbol 或者 Object 的 value 是否为 symbol
 * 
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value) {
  const type = typeof value
  return type == 'symbol' || (type == 'object' && value != null && getTag(value) == '[object Symbol]')
}

export default isSymbol

/* 
// 自定义一个迭代器
var obj = {
	[Symbol.iterator]: function() {
		return {
			next: function() {
				return {value: 1, done: false}
			}
		}
    }
}

var count = 0;
for(var item of obj) {
	if(count++ > 10) break

	console.log(item)
} 
*/