import assertString from './util/assertString';
var base32 = /^[A-Z2-7]+=*$/;
/**
 * @param {string} str
 */
export default function isBase32(str) {
    assertString(str);
    var len = str.length;
    if (len > 0 && len % 8 === 0 && base32.test(str)) {
        return true;
    }
    return false;
}
