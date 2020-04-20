import assertString from './util/assertString';
var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
/**
 * @param {string} str
 */

export default function isHexadecimal(str) {
  assertString(str);
  return hexadecimal.test(str);
}