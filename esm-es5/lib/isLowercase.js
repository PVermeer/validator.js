import assertString from './util/assertString';
/**
 * @param {string} str
 */
export default function isLowercase(str) {
    assertString(str);
    return str === str.toLowerCase();
}
