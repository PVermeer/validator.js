import merge from './util/merge';
import assertString from './util/assertString';
import includes from './util/includes';
import { decimal } from './alpha';

function decimalRegExp(options) {
  var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
  return regExp;
}

var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};
var blacklist = ['', '-', '+'];
/**
 * @param {string} str
 * @param {typeof default_decimal_options} options
 */

export default function isDecimal(str, options) {
  assertString(str);
  options = merge(options, default_decimal_options);

  if (options.locale in decimal) {
    return !includes(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }

  throw new Error("Invalid locale '".concat(options.locale, "'"));
}