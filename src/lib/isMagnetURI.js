import assertString from './util/assertString';

const magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

/**
 * @param {string} url
 */
export default function isMagnetURI(url) {
  assertString(url);
  return magnetURI.test(url.trim());
}
