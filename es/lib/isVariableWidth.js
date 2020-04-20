import assertString from './util/assertString';
import { fullWidth } from './isFullWidth';
import { halfWidth } from './isHalfWidth';
/**
 * @param {string} str
 */

export default function isVariableWidth(str) {
  assertString(str);
  return fullWidth.test(str) && halfWidth.test(str);
}