import assertString from './util/assertString';

const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
const numericNoSymbols = /^[0-9]+$/;

/**
 * @param {string} str
 * @param {{ no_symbols: boolean; }} [options]
 */
export default function isNumeric(str, options) {
  assertString(str);
  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }
  return numeric.test(str);
}
