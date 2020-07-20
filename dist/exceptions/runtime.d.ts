import { Exception } from "./base";
/**
 * @export
 * @class RuntimeException
 * @extends {Exception}
 */
export declare class RuntimeException extends Exception {
}
/**
 * @export
 * @class OverflowException
 * @extends {Exception}
 */
export declare class OverflowException extends RuntimeException {
}
/**
 * @export
 * @class RangeException
 * @extends {Exception}
 */
export declare class RangeException extends RuntimeException {
}
/**
 * @export
 * @class UnderflowException
 * @extends {Exception}
 */
export declare class UnderflowException extends RuntimeException {
}
/**
 * @export
 * @class UnexpectedValueException
 * @extends {Exception}
 */
export declare class UnexpectedValueException extends RuntimeException {
}
/**
 * @export
 * @class NotImplemented
 * @extends {Exception}
 */
export declare class NotImplemented extends RuntimeException {
    /**
     * @param {string} method
     * @param {string} klass
     * @memberof NotImplemented
     */
    constructor(method: string, klass: string);
}
/**
 * @export
 * @class AssertionException
 * @extends {Exception}
 */
export declare class AssertionException extends RuntimeException {
}
