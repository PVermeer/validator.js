import assertString from './util/assertString';
var md5 = /^[a-f0-9]{32}$/;
/**
 * @param {string} str
 */

export default function isMD5(str) {
  assertString(str);
  return md5.test(str);
}