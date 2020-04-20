/**
 * @returns { any }
 */
export default function merge(obj, defaults) {
    if (obj === void 0) { obj = {}; }
    for (var key in defaults) {
        if (typeof obj[key] === 'undefined') {
            obj[key] = defaults[key];
        }
    }
    return obj;
}
