/**
 * The base implementation of `isNaN` without support for number objects.
 * isNaN的基本实现，没有支持Number对象 
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value
}

export default baseIsNaN

/* 
var num = new Number('x');
num !== num; // false;

var num = Number('x');
num !== num; // true; 
*/

/**
 * 另一个版本实现isNaN
 * 
 * @param {any} value 
 */
/* 
function hIsNaN(value) {
  if (!isNumber(value)) {
    return false;
  }

  return +value !== +value;
}

function isNumber(num) {
  return typeof num === 'number' || Object.prototype.toString.call(num) === '[object Number]'
} 
*/