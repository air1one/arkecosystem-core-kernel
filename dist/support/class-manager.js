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
exports.ClassManager = void 0;
const contracts_1 = require("../contracts");
const ioc_1 = require("../ioc");
// todo: revisit the implementation of the class and see if it can be removed
// import { Class } from "../types";
const utils_1 = require("../utils");
/**
 * @export
 * @class ClassManager
 */
let ClassManager = class ClassManager {
    // todo: revisit the implementation of the class and see if it can be removed
    // /**
    //  * The array of available drivers.
    //  *
    //  * @private
    //  * @type {Map<string, Class>}
    //  * @memberof ClassManager
    //  */
    // private drivers: Map<string, Class> = new Map<string, Class>();
    /**
     * Create a new manager instance.
     *
     * @memberof ClassManager
     */
    constructor() {
        this.defaultDriver = this.getDefaultDriver();
    }
    /**
     * Get a driver instance.
     *
     * @param {string} [name]
     * @returns {Class}
     * @memberof ClassManager
     */
    async driver(name) {
        return this.createDriver(name || this.defaultDriver);
    }
    // todo: revisit the implementation of the class and see if it can be removed
    // /**
    //  * Register a custom driver.
    //  *
    //  * @param {string} name
    //  * @param {Class} driver
    //  * @returns {Promise<void>}
    //  * @memberof ClassManager
    //  */
    // public async extend(name: string, driver: Class): Promise<void> {
    //     this.drivers.set(name, driver);
    // }
    /**
     * Set the default driver name.
     *
     * @param {string} name
     * @memberof ClassManager
     */
    setDefaultDriver(name) {
        this.defaultDriver = name;
    }
    // todo: revisit the implementation of the class and see if it can be removed
    // /**
    //  * Get all of the available drivers.
    //  *
    //  * @returns {Class[]}
    //  * @memberof ClassManager
    //  */
    // public getDrivers(): Class[] {
    //     return Object.values(this.drivers);
    // }
    /**
     * Create a new driver instance.
     *
     * @private
     * @param {string} name
     * @memberof ClassManager
     */
    async createDriver(name) {
        const creatorFunction = `create${utils_1.pascalCase(name)}Driver`;
        if (typeof this[creatorFunction] !== "function") {
            throw new Error(`${name} driver is not supported by ${this.constructor.name}.`);
        }
        return this[creatorFunction]();
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], ClassManager.prototype, "app", void 0);
ClassManager = __decorate([
    ioc_1.injectable(),
    __metadata("design:paramtypes", [])
], ClassManager);
exports.ClassManager = ClassManager;
//# sourceMappingURL=class-manager.js.map