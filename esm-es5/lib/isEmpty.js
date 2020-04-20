import assertString from './util/assertString';
import merge from './util/merge';
var default_is_empty_options = {
    ignore_whitespace: false,
};
/**
 * @param {string} str
 * @param {typeof default_is_empty_options} [options]
 */
export default function isEmpty(str, options) {
    assertString(str);
    options = merge(options, default_is_empty_options);
    return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
