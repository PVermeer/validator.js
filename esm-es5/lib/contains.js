import assertString from './util/assertString';
import toString from './util/toString';
/**
 * @param {string | string[]} str
 * @param {any} elem
 */
export default function contains(str, elem) {
    assertString(str);
    return str.indexOf(toString(elem)) >= 0;
}
