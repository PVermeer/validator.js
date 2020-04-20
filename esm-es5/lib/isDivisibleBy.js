import assertString from './util/assertString';
import toFloat from './toFloat';
/**
 * @param {string} str
 * @param {number | string} num
 */
export default function isDivisibleBy(str, num) {
    assertString(str);
    return toFloat(str) % parseInt(num, 10) === 0;
}
