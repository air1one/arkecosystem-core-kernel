"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertionException = exports.NotImplemented = exports.UnexpectedValueException = exports.UnderflowException = exports.RangeException = exports.OverflowException = exports.RuntimeException = void 0;
const base_1 = require("./base");
/**
 * @export
 * @class RuntimeException
 * @extends {Exception}
 */
class RuntimeException extends base_1.Exception {
}
exports.RuntimeException = RuntimeException;
/**
 * @export
 * @class OverflowException
 * @extends {Exception}
 */
class OverflowException extends RuntimeException {
}
exports.OverflowException = OverflowException;
/**
 * @export
 * @class RangeException
 * @extends {Exception}
 */
class RangeException extends RuntimeException {
}
exports.RangeException = RangeException;
/**
 * @export
 * @class UnderflowException
 * @extends {Exception}
 */
class UnderflowException extends RuntimeException {
}
exports.UnderflowException = UnderflowException;
/**
 * @export
 * @class UnexpectedValueException
 * @extends {Exception}
 */
class UnexpectedValueException extends RuntimeException {
}
exports.UnexpectedValueException = UnexpectedValueException;
/**
 * @export
 * @class NotImplemented
 * @extends {Exception}
 */
class NotImplemented extends RuntimeException {
    /**
     * @param {string} method
     * @param {string} klass
     * @memberof NotImplemented
     */
    constructor(method, klass) {
        super(`Method [${method}] is not implemented in [${klass}].`);
    }
}
exports.NotImplemented = NotImplemented;
/**
 * @export
 * @class AssertionException
 * @extends {Exception}
 */
class AssertionException extends RuntimeException {
}
exports.AssertionException = AssertionException;
//# sourceMappingURL=runtime.js.map