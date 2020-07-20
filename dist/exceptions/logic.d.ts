import { Exception } from "./base";
/**
 * @export
 * @class LogicException
 * @extends {Exception}
 */
export declare class LogicException extends Exception {
}
/**
 * @export
 * @class BadMethodCallException
 * @extends {LogicException}
 */
export declare class BadMethodCallException extends LogicException {
}
/**
 * @export
 * @class DomainException
 * @extends {LogicException}
 */
export declare class DomainException extends LogicException {
}
/**
 * @export
 * @class InvalidArgumentException
 * @extends {LogicException}
 */
export declare class InvalidArgumentException extends LogicException {
}
/**
 * @export
 * @class LengthException
 * @extends {LogicException}
 */
export declare class LengthException extends LogicException {
}
/**
 * @export
 * @class OutOfBoundsException
 * @extends {Exception}
 */
export declare class OutOfBoundsException extends LogicException {
}
/**
 * @export
 * @class OutOfRangeException
 * @extends {Exception}
 */
export declare class OutOfRangeException extends LogicException {
}
/**
 * @export
 * @class MethodNotImplemented
 * @extends {BadMethodCallException}
 */
export declare class MethodNotImplemented extends BadMethodCallException {
    constructor(methodName: string);
}
/**
 * @export
 * @class MethodArgumentNotImplemented
 * @extends {BadMethodCallException}
 */
export declare class MethodArgumentNotImplemented extends BadMethodCallException {
    constructor(methodName: string, argName: string);
}
/**
 * @export
 * @class MethodArgumentValueNotImplemented
 * @extends {BadMethodCallException}
 */
export declare class MethodArgumentValueNotImplemented extends BadMethodCallException {
    constructor(methodName: string, argName: string, argValue: any);
}
/**
 * @export
 * @class UnexpectedType
 * @extends {InvalidArgumentException}
 */
export declare class UnexpectedType extends InvalidArgumentException {
    /**
     * @param {string} paramName
     * @param {string} expectedType
     * @param {*} givenType
     * @memberof InvalidType
     */
    constructor(paramName: string, expectedType: string, givenType: any);
}
