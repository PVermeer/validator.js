import assertString from './util/assertString';
import { alphanumeric } from './alpha';
export default function isAlphanumeric(str, locale) {
    if (locale === void 0) { locale = 'en-US'; }
    assertString(str);
    if (locale in alphanumeric) {
        return alphanumeric[locale].test(str);
    }
    throw new Error("Invalid locale '" + locale + "'");
}
export var locales = Object.keys(alphanumeric);
