/**
 * @param {any} input
 */
export default function assertString(input) {
    var isString = (typeof input === 'string' || input instanceof String);
    if (!isString) {
        var invalidType = void 0;
        if (input === null) {
            invalidType = 'null';
        }
        else {
            invalidType = typeof input;
            if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
                invalidType = input.constructor.name;
            }
            else {
                invalidType = "a " + invalidType;
            }
        }
        throw new TypeError("Expected string but received " + invalidType + ".");
    }
}
