import assertString from './util/assertString';
var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
/**
 * @param {string} str
 */

export default function isSurrogatePair(str) {
  assertString(str);
  return surrogatePair.test(str);
}