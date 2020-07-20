import { RuntimeException } from "./runtime";
/**
 * @export
 * @class FileException
 * @extends {RuntimeException}
 */
export declare class FileException extends RuntimeException {
}
/**
 * @export
 * @class AccessDenied
 * @extends {FileException}
 */
export declare class AccessDenied extends FileException {
    constructor(path: string);
}
/**
 * @export
 * @class CannotWriteFile
 * @extends {FileException}
 */
export declare class CannotWriteFile extends FileException {
}
/**
 * @export
 * @class DirectoryCannotBeFound
 * @extends {FileException}
 */
export declare class DirectoryCannotBeFound extends FileException {
    /**
     * @param {string} value
     * @memberof DirectoryCannotBeFound
     */
    constructor(value: string);
}
