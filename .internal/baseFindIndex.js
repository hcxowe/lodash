/**
 * The base implementation of `findIndex` and `findLastIndex`.
 * findIndex 与 findLastIndex 的基本实现
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } = array
  let index = fromIndex + (fromRight ? 1 : -1)

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex


/**
 * Array.find & Array.findIndex 的用法
 */

/* 
var ary = [1,2,3,4,5]
ary.find(x => x > 3) // 4
ary.findIndex(x => x > 4) // 4 

// find findIndex 从数组0到length-1迭代调用传入函数，如果迭代期间原数组大小改变，将不会影响迭代次数
ary.find(function(ele, index, ary) {
  if (index == 1) {
    ary.length = 3
  }

  console.log(ele); // 1 2 3 undefined*2 
})

// find findIndex 当为访问的数组元素发生改变，则访问该元素索引时，获取的是改变之后的值
ary = [1,2,3,4,5]
ary.find(function(ele, index) {
  if (index == 0) {
    delete ary[3]
  }

  console.log(ele); // 1 2 3 undefined 5
}); 
*/