"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
/**
 * @remarks
 * Log levels as defined by {@link https://tools.ietf.org/html/rfc5424 | RFC 5424}
 *
 * @export
 * @enum {number}
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Emergency"] = 0] = "Emergency";
    LogLevel[LogLevel["Alert"] = 1] = "Alert";
    LogLevel[LogLevel["Critical"] = 2] = "Critical";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Warning"] = 4] = "Warning";
    LogLevel[LogLevel["Notice"] = 5] = "Notice";
    LogLevel[LogLevel["Informational"] = 6] = "Informational";
    LogLevel[LogLevel["Debug"] = 7] = "Debug";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
//# sourceMappingURL=enums.js.map