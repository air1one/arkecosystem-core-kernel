"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidArgument = exports.CacheException = void 0;
const base_1 = require("./base");
/**
 * @export
 * @class CacheException
 * @extends {Exception}
 */
class CacheException extends base_1.Exception {
}
exports.CacheException = CacheException;
/**
 * @export
 * @class InvalidArgument
 * @extends {CacheException}
 */
class InvalidArgument extends CacheException {
}
exports.InvalidArgument = InvalidArgument;
//# sourceMappingURL=cache.js.map