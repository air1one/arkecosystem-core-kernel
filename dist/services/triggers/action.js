"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
class Action {
    constructor() {
        /**
         * @private
         * @type {Set<Function>}
         * @memberof Action
         */
        this.beforeHooks = new Set();
        /**
         * @private
         * @type {Set<Function>}
         * @memberof Action
         */
        this.errorHooks = new Set();
        /**
         * @private
         * @type {Set<Function>}
         * @memberof Action
         */
        this.afterHooks = new Set();
    }
    /**
     * @param {Function} fn
     * @memberof Action
     */
    before(fn) {
        this.beforeHooks.add(fn);
        return this;
    }
    /**
     * @param {Function} fn
     * @memberof Action
     */
    error(fn) {
        this.errorHooks.add(fn);
        return this;
    }
    /**
     * @param {Function} fn
     * @memberof Action
     */
    after(fn) {
        this.afterHooks.add(fn);
        return this;
    }
    /**
     * @param {string} type
     * @returns {Set<Function>}
     * @memberof Action
     */
    hooks(type) {
        return this[`${type}Hooks`];
    }
}
exports.Action = Action;
//# sourceMappingURL=action.js.map