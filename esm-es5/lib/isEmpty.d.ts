/**
 * @param {string} str
 * @param {typeof default_is_empty_options} [options]
 */
export default function isEmpty(str: string, options?: {
    ignore_whitespace: boolean;
}): boolean;
