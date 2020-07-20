"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigManager = void 0;
const ioc_1 = require("../../ioc");
const instance_manager_1 = require("../../support/instance-manager");
const drivers_1 = require("./drivers");
/**
 * @export
 * @class ConfigManager
 * @extends {Manager<ConfigLoader>}
 */
let ConfigManager = class ConfigManager extends instance_manager_1.InstanceManager {
    /**
     * Create an instance of the Local driver.
     *
     * @protected
     * @returns {Promise<ConfigLoader>}
     * @memberof ConfigManager
     */
    async createLocalDriver() {
        return this.app.resolve(drivers_1.LocalConfigLoader);
    }
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof ConfigManager
     */
    getDefaultDriver() {
        return "local";
    }
};
ConfigManager = __decorate([
    ioc_1.injectable()
], ConfigManager);
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=manager.js.map