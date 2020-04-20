import assertString from './util/assertString';
var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;
/**
 * @param {string} str
 * @param {{ min?: number; max?: number; allow_leading_zeroes?: boolean; lt?: number; gt?: number; }} [options]
 */
export default function isInt(str, options) {
    assertString(str);
    options = options || {};
    // Get the regex to use for testing, based on whether
    // leading zeroes are allowed or not.
    var regex = (options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ?
        int : intLeadingZeroes);
    // Check min/max/lt/gt
    var minCheckPassed = (!options.hasOwnProperty('min') || str >= options.min);
    var maxCheckPassed = (!options.hasOwnProperty('max') || str <= options.max);
    var ltCheckPassed = (!options.hasOwnProperty('lt') || str < options.lt);
    var gtCheckPassed = (!options.hasOwnProperty('gt') || str > options.gt);
    return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
