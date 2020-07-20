import { Exception } from "./base";
/**
 * @export
 * @class CacheException
 * @extends {Exception}
 */
export declare class CacheException extends Exception {
}
/**
 * @export
 * @class InvalidArgument
 * @extends {CacheException}
 */
export declare class InvalidArgument extends CacheException {
}
