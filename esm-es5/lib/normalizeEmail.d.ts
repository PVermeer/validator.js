/**
 * @param {string} email
 * @param {default_normalize_email_options} [options]
 */
export default function normalizeEmail(email: string, options?: {
    all_lowercase: boolean;
    gmail_lowercase: boolean;
    gmail_remove_dots: boolean;
    gmail_remove_subaddress: boolean;
    gmail_convert_googlemaildotcom: boolean;
    outlookdotcom_lowercase: boolean;
    outlookdotcom_remove_subaddress: boolean;
    yahoo_lowercase: boolean;
    yahoo_remove_subaddress: boolean;
    yandex_lowercase: boolean;
    icloud_lowercase: boolean;
    icloud_remove_subaddress: boolean;
}): string | false;
