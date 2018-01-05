import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * 给对象属性设置值: value为undefined时，如果对象没有属性key则不进行赋值分配
 * 
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value)
  }
}

export default assignMergeValue
