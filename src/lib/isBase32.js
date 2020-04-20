import assertString from './util/assertString';

const base32 = /^[A-Z2-7]+=*$/;

/**
 * @param {string} str
 */
export default function isBase32(str) {
  assertString(str);
  const len = str.length;
  if (len > 0 && len % 8 === 0 && base32.test(str)) {
    return true;
  }
  return false;
}
