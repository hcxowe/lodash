/**
 * 添加value到set
 *
 * @private
 * @param {Set} set
 * @param {*} value
 * @returns {Set}
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  // 不返回set.add，因为它在IE11是不可链的
  set.add(value)
  return set
}

export default addSetEntry
