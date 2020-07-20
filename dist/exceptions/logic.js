"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedType = exports.MethodArgumentValueNotImplemented = exports.MethodArgumentNotImplemented = exports.MethodNotImplemented = exports.OutOfRangeException = exports.OutOfBoundsException = exports.LengthException = exports.InvalidArgumentException = exports.DomainException = exports.BadMethodCallException = exports.LogicException = void 0;
const base_1 = require("./base");
/**
 * @export
 * @class LogicException
 * @extends {Exception}
 */
class LogicException extends base_1.Exception {
}
exports.LogicException = LogicException;
/**
 * @export
 * @class BadMethodCallException
 * @extends {LogicException}
 */
class BadMethodCallException extends LogicException {
}
exports.BadMethodCallException = BadMethodCallException;
/**
 * @export
 * @class DomainException
 * @extends {LogicException}
 */
class DomainException extends LogicException {
}
exports.DomainException = DomainException;
/**
 * @export
 * @class InvalidArgumentException
 * @extends {LogicException}
 */
class InvalidArgumentException extends LogicException {
}
exports.InvalidArgumentException = InvalidArgumentException;
/**
 * @export
 * @class LengthException
 * @extends {LogicException}
 */
class LengthException extends LogicException {
}
exports.LengthException = LengthException;
/**
 * @export
 * @class OutOfBoundsException
 * @extends {Exception}
 */
class OutOfBoundsException extends LogicException {
}
exports.OutOfBoundsException = OutOfBoundsException;
/**
 * @export
 * @class OutOfRangeException
 * @extends {Exception}
 */
class OutOfRangeException extends LogicException {
}
exports.OutOfRangeException = OutOfRangeException;
/**
 * @export
 * @class MethodNotImplemented
 * @extends {BadMethodCallException}
 */
class MethodNotImplemented extends BadMethodCallException {
    constructor(methodName) {
        super(`The ${methodName}() is not implemented.`);
    }
}
exports.MethodNotImplemented = MethodNotImplemented;
/**
 * @export
 * @class MethodArgumentNotImplemented
 * @extends {BadMethodCallException}
 */
class MethodArgumentNotImplemented extends BadMethodCallException {
    constructor(methodName, argName) {
        super(`The ${methodName}() method's argument [${argName}] behavior is not implemented.`);
    }
}
exports.MethodArgumentNotImplemented = MethodArgumentNotImplemented;
/**
 * @export
 * @class MethodArgumentValueNotImplemented
 * @extends {BadMethodCallException}
 */
class MethodArgumentValueNotImplemented extends BadMethodCallException {
    constructor(methodName, argName, argValue) {
        super(`The ${methodName}() method's argument $${argName} value ${argValue} behavior is not implemented.`);
    }
}
exports.MethodArgumentValueNotImplemented = MethodArgumentValueNotImplemented;
/**
 * @export
 * @class UnexpectedType
 * @extends {InvalidArgumentException}
 */
class UnexpectedType extends InvalidArgumentException {
    /**
     * @param {string} paramName
     * @param {string} expectedType
     * @param {*} givenType
     * @memberof InvalidType
     */
    constructor(paramName, expectedType, givenType) {
        super(`Expected argument [${paramName}] of type ${expectedType}, ${givenType} given`);
    }
}
exports.UnexpectedType = UnexpectedType;
//# sourceMappingURL=logic.js.map