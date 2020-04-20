import assertString from './util/assertString';
/**
 * @param {string} str
 * @param {number} [radix]
 */
export default function toInt(str, radix) {
    assertString(str);
    return parseInt(str, radix || 10);
}
