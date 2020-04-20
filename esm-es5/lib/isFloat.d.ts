/**
 * @param {string} str
 * @param {{ locale?: string; min?: number; max?: number; lt?: number; gt?: number; } | undefined} [options]
 */
export default function isFloat(str: string, options?: {
    locale?: string;
    min?: number;
    max?: number;
    lt?: number;
    gt?: number;
}): boolean;
export const locales: string[];
