import assertString from './util/assertString';
/**
 * @param {string} str
 * @param {string} chars
 */
export default function isWhitelisted(str, chars) {
    assertString(str);
    for (var i = str.length - 1; i >= 0; i--) {
        if (chars.indexOf(str[i]) === -1) {
            return false;
        }
    }
    return true;
}
