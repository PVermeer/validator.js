import rtrim from './rtrim';
import ltrim from './ltrim';

/**
 * @param {string} str
 * @param {string} [chars]
 */
export default function trim(str, chars) {
  return rtrim(ltrim(str, chars), chars);
}
