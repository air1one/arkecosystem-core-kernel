"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lock = void 0;
class Lock {
    constructor() {
        this.nonExclusivePromises = new Set();
    }
    async runNonExclusive(callback) {
        while (this.exclusivePromise) {
            try {
                await this.exclusivePromise;
            }
            catch { }
        }
        const nonExclusivePromise = callback();
        try {
            this.nonExclusivePromises.add(nonExclusivePromise);
            return await nonExclusivePromise;
        }
        finally {
            this.nonExclusivePromises.delete(nonExclusivePromise);
        }
    }
    async runExclusive(callback) {
        while (this.exclusivePromise) {
            try {
                await this.exclusivePromise;
            }
            catch { }
        }
        const exclusivePromise = (async () => {
            for (const nonExclusivePromise of this.nonExclusivePromises) {
                try {
                    await nonExclusivePromise;
                }
                catch { }
            }
            return await callback();
        })();
        try {
            this.exclusivePromise = exclusivePromise;
            return await exclusivePromise;
        }
        finally {
            this.exclusivePromise = undefined;
        }
    }
}
exports.Lock = Lock;
//# sourceMappingURL=lock.js.map