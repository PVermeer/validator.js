import assertString from './util/assertString';

/**
 * @param {string} str
 * @param {string} comparison
 */
export default function equals(str, comparison) {
  assertString(str);
  return str === comparison;
}
