import assertString from './util/assertString';
var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;
/**
 * @param {string} str
 */
export default function isRgbColor(str, includePercentValues) {
    if (includePercentValues === void 0) { includePercentValues = true; }
    assertString(str);
    if (!includePercentValues) {
        return rgbColor.test(str) || rgbaColor.test(str);
    }
    return rgbColor.test(str) ||
        rgbaColor.test(str) ||
        rgbColorPercent.test(str) ||
        rgbaColorPercent.test(str);
}
