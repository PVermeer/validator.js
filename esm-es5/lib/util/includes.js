/**
 * @param {any[]} arr
 * @param {string} val
 */
var includes = function (arr, val) { return arr.some(function (arrVal) { return val === arrVal; }); };
export default includes;
