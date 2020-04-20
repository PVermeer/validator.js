import assertString from './util/assertString';

export const fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

/**
 * @param {string} str
 */
export default function isFullWidth(str) {
  assertString(str);
  return fullWidth.test(str);
}
