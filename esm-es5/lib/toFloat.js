import isFloat from './isFloat';
/**
 * @param {string} str
 */
export default function toFloat(str) {
    if (!isFloat(str))
        return NaN;
    return parseFloat(str);
}
