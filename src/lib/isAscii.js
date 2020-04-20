import assertString from './util/assertString';

/* eslint-disable no-control-regex */
const ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

/**
 * @param {string} str
 */
export default function isAscii(str) {
  assertString(str);
  return ascii.test(str);
}
