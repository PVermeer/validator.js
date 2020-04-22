declare namespace validator {
    type AlphaLocale = any;
    type AlphanumericLocale = any;
    interface IsByteLengthOptions {
        [prop: string]: any;
    }
    interface IsCurrencyOptions {
        [prop: string]: any;
    }
    type DecimalLocale = any;
    interface IsDecimalOptions {
        [prop: string]: any;
    }
    interface IsEmailOptions {
        [prop: string]: any;
    }
    interface IsEmptyOptions {
        [prop: string]: any;
    }
    type FloatLocale = any;
    interface IsFloatOptions {
        [prop: string]: any;
    }
    interface IsFQDNOptions {
        [prop: string]: any;
    }
    type HashAlgorithm = any;
    type IdentityCardLocale = any;
    interface IsIntOptions {
        [prop: string]: any;
    }
    type IPVersion = any;
    type ISBNVersion = any;
    interface IsISO8601Options {
        [prop: string]: any;
    }
    interface IsISSNOptions {
        [prop: string]: any;
    }
    interface IsLengthOptions {
        [prop: string]: any;
    }
    interface IsMACAddressOptions {
        [prop: string]: any;
    }
    type MobilePhoneLocale = any;
    interface IsMobilePhoneOptions {
        [prop: string]: any;
    }
    interface IsNumericOptions {
        [prop: string]: any;
    }
    type PostalCodeLocale = any;
    interface IsURLOptions {
        [prop: string]: any;
    }
    type UUIDVersion = any;
    interface NormalizeEmailOptions {
        [prop: string]: any;
    }
}
declare const validator: {
    version: string;
    toDate: typeof import("./lib/toDate").default;
    toFloat: typeof import("./lib/toFloat").default;
    toInt: typeof import("./lib/toInt").default;
    toBoolean: typeof import("./lib/toBoolean").default;
    equals: typeof import("./lib/equals").default;
    contains: typeof import("./lib/contains").default;
    matches: typeof import("./lib/matches").default;
    isEmail: typeof import("./lib/isEmail").default;
    isURL: typeof import("./lib/isURL").default;
    isMACAddress: typeof import("./lib/isMACAddress").default;
    isIP: typeof import("./lib/isIP").default;
    isIPRange: typeof import("./lib/isIPRange").default;
    isFQDN: typeof import("./lib/isFQDN").default;
    isBoolean: typeof import("./lib/isBoolean").default;
    isIBAN: typeof import("./lib/isIBAN").default;
    isBIC: typeof import("./lib/isBIC").default;
    isAlpha: typeof import("./lib/isAlpha").default;
    isAlphaLocales: string[];
    isAlphanumeric: typeof import("./lib/isAlphanumeric").default;
    isAlphanumericLocales: string[];
    isNumeric: typeof import("./lib/isNumeric").default;
    isPassportNumber: typeof import("./lib/isPassportNumber").default;
    isPort: typeof import("./lib/isPort").default;
    isLowercase: typeof import("./lib/isLowercase").default;
    isUppercase: typeof import("./lib/isUppercase").default;
    isAscii: typeof import("./lib/isAscii").default;
    isFullWidth: typeof import("./lib/isFullWidth").default;
    isHalfWidth: typeof import("./lib/isHalfWidth").default;
    isVariableWidth: typeof import("./lib/isVariableWidth").default;
    isMultibyte: typeof import("./lib/isMultibyte").default;
    isSemVer: typeof import("./lib/isSemVer").default;
    isSurrogatePair: typeof import("./lib/isSurrogatePair").default;
    isInt: typeof import("./lib/isInt").default;
    isFloat: typeof import("./lib/isFloat").default;
    isFloatLocales: string[];
    isDecimal: typeof import("./lib/isDecimal").default;
    isHexadecimal: typeof import("./lib/isHexadecimal").default;
    isOctal: typeof import("./lib/isOctal").default;
    isDivisibleBy: typeof import("./lib/isDivisibleBy").default;
    isHexColor: typeof import("./lib/isHexColor").default;
    isRgbColor: typeof import("./lib/isRgbColor").default;
    isHSL: typeof import("./lib/isHSL").default;
    isISRC: typeof import("./lib/isISRC").default;
    isMD5: typeof import("./lib/isMD5").default;
    isHash: typeof import("./lib/isHash").default;
    isJWT: typeof import("./lib/isJWT").default;
    isJSON: typeof import("./lib/isJSON").default;
    isEmpty: typeof import("./lib/isEmpty").default;
    isLength: typeof import("./lib/isLength").default;
    isLocale: typeof import("./lib/isLocale").default;
    isByteLength: typeof import("./lib/isByteLength").default;
    isUUID: typeof import("./lib/isUUID").default;
    isMongoId: typeof import("./lib/isMongoId").default;
    isAfter: typeof import("./lib/isAfter").default;
    isBefore: typeof import("./lib/isBefore").default;
    isIn: typeof import("./lib/isIn").default;
    isCreditCard: typeof import("./lib/isCreditCard").default;
    isIdentityCard: typeof import("./lib/isIdentityCard").default;
    isEAN: typeof import("./lib/isEAN").default;
    isISIN: typeof import("./lib/isISIN").default;
    isISBN: typeof import("./lib/isISBN").default;
    isISSN: typeof import("./lib/isISSN").default;
    isMobilePhone: typeof import("./lib/isMobilePhone").default;
    isMobilePhoneLocales: string[];
    isPostalCode: typeof import("./lib/isPostalCode").default;
    isPostalCodeLocales: string[];
    isEthereumAddress: typeof import("./lib/isEthereumAddress").default;
    isCurrency: typeof import("./lib/isCurrency").default;
    isBtcAddress: typeof import("./lib/isBtcAddress").default;
    isISO8601: typeof import("./lib/isISO8601").default;
    isRFC3339: typeof import("./lib/isRFC3339").default;
    isISO31661Alpha2: typeof import("./lib/isISO31661Alpha2").default;
    isISO31661Alpha3: typeof import("./lib/isISO31661Alpha3").default;
    isBase32: typeof import("./lib/isBase32").default;
    isBase64: typeof import("./lib/isBase64").default;
    isDataURI: typeof import("./lib/isDataURI").default;
    isMagnetURI: typeof import("./lib/isMagnetURI").default;
    isMimeType: typeof import("./lib/isMimeType").default;
    isLatLong: typeof import("./lib/isLatLong").default;
    ltrim: typeof import("./lib/ltrim").default;
    rtrim: typeof import("./lib/rtrim").default;
    trim: typeof import("./lib/trim").default;
    escape: typeof import("./lib/escape").default;
    unescape: typeof import("./lib/unescape").default;
    stripLow: typeof import("./lib/stripLow").default;
    whitelist: typeof import("./lib/whitelist").default;
    blacklist: typeof import("./lib/blacklist").default;
    isWhitelisted: typeof import("./lib/isWhitelisted").default;
    normalizeEmail: typeof import("./lib/normalizeEmail").default;
    toString: typeof toString;
    isSlug: typeof import("./lib/isSlug").default;
    isDate: typeof import("./lib/isDate").default;
};
export default validator;
/**
 * ====== Tree-shakeable es-modules ======
 */
export { default as toDate } from './lib/toDate';
export { default as toFloat } from './lib/toFloat';
export { default as toInt } from './lib/toInt';
export { default as toBoolean } from './lib/toBoolean';
export { default as equals } from './lib/equals';
export { default as contains } from './lib/contains';
export { default as matches } from './lib/matches';
export { default as isEmail } from './lib/isEmail';
export { default as isURL } from './lib/isURL';
export { default as isMACAddress } from './lib/isMACAddress';
export { default as isIP } from './lib/isIP';
export { default as isIPRange } from './lib/isIPRange';
export { default as isFQDN } from './lib/isFQDN';
export { default as isDate } from './lib/isDate';
export { default as isBoolean } from './lib/isBoolean';
export { default as isLocale } from './lib/isLocale';
export { default as isAlpha, locales as isAlphaLocales } from './lib/isAlpha';
export { default as isAlphanumeric, locales as isAlphanumericLocales } from './lib/isAlphanumeric';
export { default as isNumeric } from './lib/isNumeric';
export { default as isPassportNumber } from './lib/isPassportNumber';
export { default as isPort } from './lib/isPort';
export { default as isLowercase } from './lib/isLowercase';
export { default as isUppercase } from './lib/isUppercase';
export { default as isAscii } from './lib/isAscii';
export { default as isFullWidth } from './lib/isFullWidth';
export { default as isHalfWidth } from './lib/isHalfWidth';
export { default as isVariableWidth } from './lib/isVariableWidth';
export { default as isMultibyte } from './lib/isMultibyte';
export { default as isSemVer } from './lib/isSemVer';
export { default as isSurrogatePair } from './lib/isSurrogatePair';
export { default as isInt } from './lib/isInt';
export { default as isFloat, locales as isFloatLocales } from './lib/isFloat';
export { default as isDecimal } from './lib/isDecimal';
export { default as isHexadecimal } from './lib/isHexadecimal';
export { default as isOctal } from './lib/isOctal';
export { default as isDivisibleBy } from './lib/isDivisibleBy';
export { default as isHexColor } from './lib/isHexColor';
export { default as isRgbColor } from './lib/isRgbColor';
export { default as isHSL } from './lib/isHSL';
export { default as isISRC } from './lib/isISRC';
export { default as isIBAN } from './lib/isIBAN';
export { default as isBIC } from './lib/isBIC';
export { default as isMD5 } from './lib/isMD5';
export { default as isHash } from './lib/isHash';
export { default as isJWT } from './lib/isJWT';
export { default as isJSON } from './lib/isJSON';
export { default as isEmpty } from './lib/isEmpty';
export { default as isLength } from './lib/isLength';
export { default as isByteLength } from './lib/isByteLength';
export { default as isUUID } from './lib/isUUID';
export { default as isMongoId } from './lib/isMongoId';
export { default as isAfter } from './lib/isAfter';
export { default as isBefore } from './lib/isBefore';
export { default as isIn } from './lib/isIn';
export { default as isCreditCard } from './lib/isCreditCard';
export { default as isIdentityCard } from './lib/isIdentityCard';
export { default as isEAN } from './lib/isEAN';
export { default as isISIN } from './lib/isISIN';
export { default as isISBN } from './lib/isISBN';
export { default as isISSN } from './lib/isISSN';
export { default as isMobilePhone, locales as isMobilePhoneLocales } from './lib/isMobilePhone';
export { default as isEthereumAddress } from './lib/isEthereumAddress';
export { default as isCurrency } from './lib/isCurrency';
export { default as isBtcAddress } from './lib/isBtcAddress';
export { default as isISO8601 } from './lib/isISO8601';
export { default as isRFC3339 } from './lib/isRFC3339';
export { default as isISO31661Alpha2 } from './lib/isISO31661Alpha2';
export { default as isISO31661Alpha3 } from './lib/isISO31661Alpha3';
export { default as isBase32 } from './lib/isBase32';
export { default as isBase64 } from './lib/isBase64';
export { default as isDataURI } from './lib/isDataURI';
export { default as isMagnetURI } from './lib/isMagnetURI';
export { default as isMimeType } from './lib/isMimeType';
export { default as isLatLong } from './lib/isLatLong';
export { default as isPostalCode, locales as isPostalCodeLocales } from './lib/isPostalCode';
export { default as ltrim } from './lib/ltrim';
export { default as rtrim } from './lib/rtrim';
export { default as trim } from './lib/trim';
export { default as escape } from './lib/escape';
export { default as unescape } from './lib/unescape';
export { default as stripLow } from './lib/stripLow';
export { default as whitelist } from './lib/whitelist';
export { default as blacklist } from './lib/blacklist';
export { default as isWhitelisted } from './lib/isWhitelisted';
export { default as normalizeEmail } from './lib/normalizeEmail';
export { default as isSlug } from './lib/isSlug';
