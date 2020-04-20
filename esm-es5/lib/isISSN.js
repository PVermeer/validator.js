import assertString from './util/assertString';
var issn = '^\\d{4}-?\\d{3}[\\dX]$';
export default function isISSN(str, options) {
    if (options === void 0) { options = {}; }
    assertString(str);
    var testIssn = issn;
    testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
    testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
    if (!testIssn.test(str)) {
        return false;
    }
    var digits = str.replace('-', '').toUpperCase();
    var checksum = 0;
    for (var i = 0; i < digits.length; i++) {
        var digit = digits[i];
        checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
    }
    return checksum % 11 === 0;
}
