import assertString from './util/assertString';

const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

/**
 * @param {string} str
 */
export default function isHexColor(str) {
  assertString(str);
  return hexcolor.test(str);
}
