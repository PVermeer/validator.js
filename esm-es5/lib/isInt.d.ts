/**
 * @param {string} str
 * @param {{ min?: number; max?: number; allow_leading_zeroes?: boolean; lt?: number; gt?: number; }} [options]
 */
export default function isInt(str: string, options?: {
    min?: number;
    max?: number;
    allow_leading_zeroes?: boolean;
    lt?: number;
    gt?: number;
}): boolean;
