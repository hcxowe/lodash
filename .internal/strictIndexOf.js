/**
 * A specialized version of `indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 * 执行严格相等的indexOf版本
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1
  const { length } = array // 未验证array是否是数组

  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

export default strictIndexOf

/* 
// Array.indexOf 本身就是用的严格相等来比较的
var ary = [1,2,3,4,5];
ary.indexOf('3', 1); // -1
ary.indexOf(3, 1); // 2 
*/