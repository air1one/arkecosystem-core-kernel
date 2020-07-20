"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
/**
 * @export
 * @class Exception
 * @extends {Error}
 */
class Exception extends Error {
    /**
     * Creates an instance of Exception.
     *
     * @param {string} message
     * @param {string} [code]
     * @memberof Exception
     */
    constructor(message, code) {
        super(message);
        Object.defineProperty(this, "message", {
            enumerable: false,
            value: code ? `${code}: ${message}` : message,
        });
        Object.defineProperty(this, "name", {
            enumerable: false,
            value: this.constructor.name,
        });
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.Exception = Exception;
//# sourceMappingURL=base.js.map