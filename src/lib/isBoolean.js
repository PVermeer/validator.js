import assertString from './util/assertString';

/**
 * @param {string} str
 */
export default function isBoolean(str) {
  assertString(str);
  return (['true', 'false', '1', '0'].indexOf(str) >= 0);
}
