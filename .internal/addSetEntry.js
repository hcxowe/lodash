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

/** 
 * Set的基本使用
 */
/* 
var set = new Set();
set.add({x: 1});
set.add({x: 2});
set.add({x: 3});

console.log('--------------遍历Set------------------');
for (let item of set) {
  console.log(item); // { x: 1 }, { x: 2 }, { x: 3 } 
}

 // entries()不适用与Set
 // values与keys返回的迭代器是一样的
var iteVal = set.values(),
    iteKey = set.keys();
    iteEnt = set.entries();
  
console.log('--------------遍历Set.values()--------------');
for (let item of iteVal) {
  console.log(item);
}

console.log('--------------遍历Set.entries()------------------');
for (let item of iteEnt) {
  console.log(item);
}

console.log('--------------遍历Set.keys()------------------');
for (let item of iteKey) {
  console.log(item);
} 
*/