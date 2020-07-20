"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDispatcherManager = void 0;
const instance_manager_1 = require("../../support/instance-manager");
const memory_1 = require("./drivers/memory");
/**
 * @export
 * @class EventDispatcherManager
 * @extends {Manager<EventDispatcher>}
 */
class EventDispatcherManager extends instance_manager_1.InstanceManager {
    /**
     * Create an instance of the Memory driver.
     *
     * @protected
     * @returns {Promise<EventDispatcher>}
     * @memberof EventDispatcherManager
     */
    async createMemoryDriver() {
        return this.app.resolve(memory_1.MemoryEventDispatcher);
    }
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof EventDispatcherManager
     */
    getDefaultDriver() {
        return "memory";
    }
}
exports.EventDispatcherManager = EventDispatcherManager;
//# sourceMappingURL=manager.js.map