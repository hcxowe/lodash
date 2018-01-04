/**
 * 添加键值对pair到map
 * 
 * @private
 * @param {Map} map
 * @param {Array} pair
 * @returns {Map}
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  // 不返回map.set，因为它在IE11是不可链的
  map.set(pair[0], pair[1])
  return map
}

export default addMapEntry

/**
 * 为 map 添加以数组存储 key-value 的项
 */

/* 
var map   = new Map(),
    item  = ['name', 'lodash'];

addMapEntry(map, item); // map => name-lodash 

typeof map; // Object
*/
 