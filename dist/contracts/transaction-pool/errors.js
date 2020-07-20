"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolError = void 0;
class PoolError extends Error {
    constructor(message, type) {
        super(message);
        this.type = type;
    }
}
exports.PoolError = PoolError;
//# sourceMappingURL=errors.js.map