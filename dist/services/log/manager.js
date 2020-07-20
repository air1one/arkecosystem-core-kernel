"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogManager = void 0;
const instance_manager_1 = require("../../support/instance-manager");
const memory_1 = require("./drivers/memory");
/**
 * @export
 * @class LogManager
 * @extends {Manager<Logger>}
 */
class LogManager extends instance_manager_1.InstanceManager {
    /**
     * Create an instance of the Memory driver.
     *
     * @protected
     * @returns {Promise<Logger>}
     * @memberof LogManager
     */
    async createMemoryDriver() {
        return this.app.resolve(memory_1.MemoryLogger).make();
    }
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof LogManager
     */
    getDefaultDriver() {
        return "memory";
    }
}
exports.LogManager = LogManager;
//# sourceMappingURL=manager.js.map