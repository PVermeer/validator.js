/**
 * @param {string} str
 * @param {typeof default_decimal_options} options
 */
export default function isDecimal(str: string, options: {
    force_decimal: boolean;
    decimal_digits: string;
    locale: string;
}): boolean;
