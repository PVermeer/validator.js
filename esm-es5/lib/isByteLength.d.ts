/**
 * @param {string} str
 * @param {{ min?: any; max?: any; }} [options]
 */
export default function isByteLength(str: string, options?: {
    min?: any;
    max?: any;
}, ...args: any[]): boolean;
