/**
 * @param {string} str
 * @param {{ no_colons: boolean; }} [options]
 */
export default function isMACAddress(str: string, options?: {
    no_colons: boolean;
}): boolean;
