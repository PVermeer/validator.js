import assertString from './util/assertString';
import toDate from './toDate';
/**
 * @param {string} str
 * @param {string | number | date} [date]
 */
export default function isAfter(str, date) {
    if (date === void 0) { date = String(new Date()); }
    assertString(str);
    var comparison = toDate(date);
    var original = toDate(str);
    return !!(original && comparison && original > comparison);
}
