/**
 * @param {string} str
 * @param {typeof default_fqdn_options} [options]
 */
export default function isFQDN(str: string, options?: {
    require_tld: boolean;
    allow_underscores: boolean;
    allow_trailing_dot: boolean;
}): boolean;
