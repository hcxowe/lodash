const objectProto = Object.prototype
const hasOwnProperty = objectProto.hasOwnProperty
const toString = objectProto.toString
const symToStringTag = typeof Symbol != 'undefined' ? Symbol.toStringTag : undefined

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 * getTage 的基本实现
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value)
  }
  const isOwn = hasOwnProperty.call(value, symToStringTag) // 是否symToStringTag是否是value自身属性
  const tag = value[symToStringTag]
  let unmasked = false
  try {
    value[symToStringTag] = undefined // 什么情况下会抛出错误？
    unmasked = true
  } catch (e) {}

  const result = toString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}

export default baseGetTag


// 通过Symbol.toStringTag设置自己的自定义标签
/* 
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'Validator';
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
*/