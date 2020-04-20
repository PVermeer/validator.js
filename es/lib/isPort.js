import isInt from './isInt';
/**
 * @param {string} str
 */

export default function isPort(str) {
  return isInt(str, {
    min: 0,
    max: 65535
  });
}