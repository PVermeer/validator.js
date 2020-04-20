import assertString from './util/assertString';
/**
 * @param {string} str
 */

export default function isUppercase(str) {
  assertString(str);
  return str === str.toUpperCase();
}