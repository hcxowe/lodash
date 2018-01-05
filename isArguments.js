import getTag from './.internal/getTag.js'

/**
 * Checks if `value` is likely an `arguments` object.
 * 
 * 检查 value 是否是类 arguments 对象
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments(value) {
  return typeof value == 'object' && value !== null && getTag(value) == '[object Arguments]'
}

export default isArguments

/* 
Object.prototype.toString.call(function(){return arguments;}()); //"[object Arguments]" 
*/
