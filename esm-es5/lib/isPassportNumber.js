/**
 * Reference:
 * https://en.wikipedia.org/ -- Wikipedia
 * https://docs.microsoft.com/en-us/microsoft-365/compliance/eu-passport-number -- EU Passport Number
 * https://countrycode.org/ -- Country Codes
 */
var passportRegexByCountryCode = {
    AM: /^[A-Z]{2}\d{7}$/,
    AR: /^[A-Z]{3}\d{6}$/,
    AT: /^[A-Z]\d{7}$/,
    AU: /^[A-Z]\d{7}$/,
    BE: /^[A-Z]{2}\d{6}$/,
    BG: /^\d{9}$/,
    CA: /^[A-Z]{2}\d{6}$/,
    CH: /^[A-Z]\d{7}$/,
    CN: /^[GE]\d{8}$/,
    CY: /^[A-Z](\d{6}|\d{8})$/,
    CZ: /^\d{8}$/,
    DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
    DK: /^\d{9}$/,
    DZ: /^\d{9}$/,
    EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
    ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
    FI: /^[A-Z]{2}\d{7}$/,
    FR: /^\d{2}[A-Z]{2}\d{5}$/,
    GB: /^\d{9}$/,
    GR: /^[A-Z]{2}\d{7}$/,
    HR: /^\d{9}$/,
    HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
    IE: /^[A-Z0-9]{2}\d{7}$/,
    IS: /^(A)\d{7}$/,
    IT: /^[A-Z0-9]{2}\d{7}$/,
    JP: /^[A-Z]{2}\d{7}$/,
    KR: /^[MS]\d{8}$/,
    LT: /^[A-Z0-9]{8}$/,
    LU: /^[A-Z0-9]{8}$/,
    LV: /^[A-Z0-9]{2}\d{7}$/,
    MT: /^\d{7}$/,
    NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
    PO: /^[A-Z]{2}\d{7}$/,
    PT: /^[A-Z]\d{6}$/,
    RO: /^\d{8,9}$/,
    SE: /^\d{8}$/,
    SL: /^(P)[A-Z]\d{7}$/,
    SK: /^[0-9A-Z]\d{7}$/,
    TR: /^[A-Z]\d{8}$/,
    UA: /^[A-Z]{2}\d{6}$/,
    US: /^\d{9}$/,
};
/**
 * Check if str is a valid passport number
 * relative to provided ISO Country Code.
 *
 * @param {string} str
 * @param {string} countryCode
 * @return {boolean}
 */
export default function isPassportNumber(str, countryCode) {
    /** Remove All Whitespaces, Convert to UPPERCASE */
    var normalizedStr = str.replace(/\s/g, '').toUpperCase();
    return (countryCode.toUpperCase() in passportRegexByCountryCode) &&
        passportRegexByCountryCode[countryCode].test(normalizedStr);
}
