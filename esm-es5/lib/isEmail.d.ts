/**
 * @param {string} str
 * @param {typeof default_email_options} [options]
 */
export default function isEmail(str: string, options?: {
    allow_display_name: boolean;
    require_display_name: boolean;
    allow_utf8_local_part: boolean;
    require_tld: boolean;
}): boolean;
