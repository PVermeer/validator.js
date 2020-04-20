import assertString from './util/assertString';
import toString from './util/toString';
/**
 * @param {string} str
 * @param {any[]} options
 */
export default function isIn(str, options) {
    assertString(str);
    var i;
    if (Object.prototype.toString.call(options) === '[object Array]') {
        var array = [];
        for (i in options) {
            // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
            // istanbul ignore else
            if ({}.hasOwnProperty.call(options, i)) {
                array[i] = toString(options[i]);
            }
        }
        return array.indexOf(str) >= 0;
    }
    else if (typeof options === 'object') {
        return options.hasOwnProperty(str);
    }
    else if (options && typeof options.indexOf === 'function') {
        return options.indexOf(str) >= 0;
    }
    return false;
}
