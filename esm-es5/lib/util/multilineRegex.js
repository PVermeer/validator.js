/**
 * Build RegExp object from an array
 * of multiple/multi-line regexp parts
 *
 * @param {string[]} parts
 * @param {string} flags
 * @return {RegExp} - RegExp object
 */
export default function multilineRegexp(parts, flags) {
    if (flags === void 0) { flags = ''; }
    var regexpAsStringLiteral = parts.join('');
    return new RegExp(regexpAsStringLiteral, flags);
}
