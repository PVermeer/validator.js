import assertString from './util/assertString';
import isHexadecimal from './isHexadecimal';
/**
 * @param {string} str
 */

export default function isMongoId(str) {
  assertString(str);
  return isHexadecimal(str) && str.length === 24;
}