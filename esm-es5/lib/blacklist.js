import assertString from './util/assertString';
/**
 * @param {string} str
 * @param {string} chars
 */
export default function blacklist(str, chars) {
    assertString(str);
    return str.replace(new RegExp("[" + chars + "]+", 'g'), '');
}
