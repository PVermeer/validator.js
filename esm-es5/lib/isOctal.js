import assertString from './util/assertString';
var octal = /^(0o)?[0-7]+$/i;
/**
 * @param {string} str
 */
export default function isOctal(str) {
    assertString(str);
    return octal.test(str);
}
