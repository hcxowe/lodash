/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991

/** Used to detect unsigned integer values. */
const reIsUint = /^(?:0|[1-9]\d*)$/ // ?: 不分组

/**
 * Checks if `value` is a valid array-like index.
 *
 * 检查 value 是否为 有效的  类数组 索引
 * 
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  const type = typeof value
  length = length == null ? MAX_SAFE_INTEGER : length // length 不为 undefined 或 null

  /* 
    1. length不为0 
    2. value 为 number || value不为symbol && value能过匹配reIsUint正则  value传入test或自动进行toString转化
    3. value > -1 && value 为整数 && value 小于 length
  */
  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length)
}

export default isIndex
