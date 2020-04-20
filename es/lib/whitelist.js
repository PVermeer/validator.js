import assertString from './util/assertString';
/**
 * @param {string} str
 * @param {string} chars
 */

export default function whitelist(str, chars) {
  assertString(str);
  return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
}