"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceManager = void 0;
const contracts_1 = require("../contracts");
const container_1 = require("../exceptions/container");
const ioc_1 = require("../ioc");
const utils_1 = require("../utils");
/**
 * @export
 * @abstract
 * @class InstanceManager
 * @template T
 */
let InstanceManager = class InstanceManager {
    /**
     * Create a new manager instance.
     *
     * @memberof InstanceManager
     */
    constructor() {
        /**
         * The array of created "drivers".
         *
         * @private
         * @type {Map<string, T>}
         * @memberof InstanceManager
         */
        this.drivers = new Map();
        this.defaultDriver = this.getDefaultDriver();
    }
    /**
     * Boot the default driver.
     *
     * @memberof InstanceManager
     */
    async boot() {
        await this.createDriver(this.defaultDriver);
    }
    /**
     * Get a driver instance.
     *
     * @param {string} [name]
     * @returns {T}
     * @memberof InstanceManager
     */
    driver(name) {
        name = name || this.defaultDriver;
        const driver = this.drivers.get(name);
        if (!driver) {
            throw new container_1.DriverCannotBeResolved(name);
        }
        return driver;
    }
    /**
     * Register and call a custom driver creator.
     *
     * @param {string} name
     * @param {(app: Kernel.Application) => T} callback
     * @memberof InstanceManager
     */
    async extend(name, callback) {
        this.drivers.set(name, await callback(this.app));
    }
    /**
     * Set the default driver name.
     *
     * @param {string} name
     * @memberof InstanceManager
     */
    setDefaultDriver(name) {
        this.defaultDriver = name;
    }
    /**
     * Get all of the created drivers.
     *
     * @returns {T[]}
     * @memberof InstanceManager
     */
    getDrivers() {
        return Array.from(this.drivers.values());
    }
    /**
     * Create a new driver instance.
     *
     * @private
     * @param {string} name
     * @memberof InstanceManager
     */
    async createDriver(name) {
        const creatorFunction = `create${utils_1.pascalCase(name)}Driver`;
        if (typeof this[creatorFunction] !== "function") {
            throw new Error(`${name} driver is not supported by ${this.constructor.name}.`);
        }
        this.drivers.set(name, await this[creatorFunction](this.app));
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], InstanceManager.prototype, "app", void 0);
InstanceManager = __decorate([
    ioc_1.injectable(),
    __metadata("design:paramtypes", [])
], InstanceManager);
exports.InstanceManager = InstanceManager;
//# sourceMappingURL=instance-manager.js.map