import assertString from './util/assertString';
/* eslint-disable prefer-rest-params */
export default function isLength(str, options) {
    assertString(str);
    var min;
    var max;
    if (typeof (options) === 'object') {
        min = options.min || 0;
        max = options.max;
    }
    else { // backwards compatibility: isLength(str, min [, max])
        min = arguments[1] || 0;
        max = arguments[2];
    }
    var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
    var len = str.length - surrogatePairs.length;
    return len >= min && (typeof max === 'undefined' || len <= max);
}
