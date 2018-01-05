/** 
 * Detect free variable `global` from Node.js. 
 * 检查Node环境下的global变量
 */
const freeGlobal = typeof global == 'object' && global !== null && global.Object === Object && global

export default freeGlobal