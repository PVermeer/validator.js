/**
 * @param {string} str
 * @param {{ case_sensitive: boolean, require_hyphen: boolean }} [options]
 */
export default function isISSN(str: string, options?: {
    case_sensitive: boolean;
    require_hyphen: boolean;
}): boolean;
