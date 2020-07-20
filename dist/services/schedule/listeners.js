"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteCallbackWhenReady = void 0;
/**
 * @export
 * @class ExecuteCallbackWhenReady
 * @implements {EventListener}
 */
class ExecuteCallbackWhenReady {
    /**
     * @param {Function} callback
     * @param {number} blockCount
     * @returns {this}
     * @memberof ExecuteCallbackWhenReady
     */
    constructor(callback, blockCount) {
        this.blockCount = blockCount;
        this.callback = callback;
    }
    /**
     * @param {*} {data}
     * @returns {Promise<void>}
     * @memberof ExecuteCallbackWhenReady
     */
    async handle({ data }) {
        if (data.height % this.blockCount === 0) {
            await this.callback();
        }
    }
}
exports.ExecuteCallbackWhenReady = ExecuteCallbackWhenReady;
//# sourceMappingURL=listeners.js.map