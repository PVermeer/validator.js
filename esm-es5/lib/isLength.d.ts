/**
 * @param {string} str
 * @param {{ min?: number; max?: number; }} [options]
 */
export default function isLength(str: string, options?: {
    min?: number;
    max?: number;
}, ...args: any[]): boolean;
