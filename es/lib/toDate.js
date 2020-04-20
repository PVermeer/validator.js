import assertString from './util/assertString';
/**
 * @param {string | number | Date} date
 */

export default function toDate(date) {
  assertString(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}