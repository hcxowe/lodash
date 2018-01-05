/**
 * A specialized version of `forEach` for arrays.
 * 一个Array.forEach的实现
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length

  // Array.forEach并不会因为传入的函数返回false就中断遍历
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  // 返回数组本身用于链式调用
  return array
}

export default arrayEach

/**
 * Array.forEach使用
 */

/* 
var ary = [1,2,3,4,5];
ary.forEach(function(...rest) {
	console.log(rest);// 循环五次，并不会因 return false 中断循环
	return false;
}); */

