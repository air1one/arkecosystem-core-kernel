"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueManager = void 0;
const ioc_1 = require("../../ioc");
const class_manager_1 = require("../../support/class-manager");
const memory_1 = require("./drivers/memory");
/**
 * @export
 * @class QueueManager
 * @extends {ClassManager}
 */
let QueueManager = class QueueManager extends class_manager_1.ClassManager {
    /**
     * Create an instance of the Memory driver.
     *
     * @protected
     * @returns {Promise<Logger>}
     * @memberof QueueManager
     */
    async createMemoryDriver() {
        return this.app.resolve(memory_1.MemoryQueue).make();
    }
    /**
     * Get the default driver name.
     *
     * @protected
     * @returns {string}
     * @memberof ValidationManager
     */
    getDefaultDriver() {
        return "memory";
    }
};
QueueManager = __decorate([
    ioc_1.injectable()
], QueueManager);
exports.QueueManager = QueueManager;
//# sourceMappingURL=manager.js.map