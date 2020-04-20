import assertString from './util/assertString';
var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
/**
 * @param {string} str
 */
export default function isDataURI(str) {
    assertString(str);
    var data = str.split(',');
    if (data.length < 2) {
        return false;
    }
    var attributes = data.shift().trim().split(';');
    var schemeAndMediaType = attributes.shift();
    if (schemeAndMediaType.substr(0, 5) !== 'data:') {
        return false;
    }
    var mediaType = schemeAndMediaType.substr(5);
    if (mediaType !== '' && !validMediaType.test(mediaType)) {
        return false;
    }
    for (var i = 0; i < attributes.length; i++) {
        if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {
            // ok
        }
        else if (!validAttribute.test(attributes[i])) {
            return false;
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (!validData.test(data[i])) {
            return false;
        }
    }
    return true;
}
