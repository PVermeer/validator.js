import assertString from './util/assertString';
import { alpha } from './alpha';
/**
 * @param {string} str
 */
export default function isAlpha(str, locale) {
    if (locale === void 0) { locale = 'en-US'; }
    assertString(str);
    if (locale in alpha) {
        return alpha[locale].test(str);
    }
    throw new Error("Invalid locale '" + locale + "'");
}
export var locales = Object.keys(alpha);
