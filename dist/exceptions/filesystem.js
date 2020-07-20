"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryCannotBeFound = exports.CannotWriteFile = exports.AccessDenied = exports.FileException = void 0;
const runtime_1 = require("./runtime");
/**
 * @export
 * @class FileException
 * @extends {RuntimeException}
 */
class FileException extends runtime_1.RuntimeException {
}
exports.FileException = FileException;
/**
 * @export
 * @class AccessDenied
 * @extends {FileException}
 */
class AccessDenied extends FileException {
    constructor(path) {
        super(`The file ${path} could not be accessed.`);
    }
}
exports.AccessDenied = AccessDenied;
/**
 * @export
 * @class CannotWriteFile
 * @extends {FileException}
 */
class CannotWriteFile extends FileException {
}
exports.CannotWriteFile = CannotWriteFile;
/**
 * @export
 * @class DirectoryCannotBeFound
 * @extends {FileException}
 */
class DirectoryCannotBeFound extends FileException {
    /**
     * @param {string} value
     * @memberof DirectoryCannotBeFound
     */
    constructor(value) {
        super(`Directory [${value}] could not be found.`);
    }
}
exports.DirectoryCannotBeFound = DirectoryCannotBeFound;
//# sourceMappingURL=filesystem.js.map