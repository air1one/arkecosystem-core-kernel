"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigRepository = void 0;
const utils_1 = require("@arkecosystem/utils");
const ioc_1 = require("../../ioc");
const utils_2 = require("../../utils");
/**
 * @export
 * @class ConfigRepository
 * @extends {Map<string, any>}
 */
let ConfigRepository = class ConfigRepository {
    constructor() {
        /**
         * All of the configuration items.
         *
         * @private
         * @type {JsonObject}
         * @memberof ConfigRepository
         */
        this.items = {};
    }
    /**
     * Get all configuration values.
     *
     * @returns {JsonObject}
     * @memberof ConfigRepository
     */
    all() {
        return this.items;
    }
    /**
     * Get the specified configuration value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {T}
     * @memberof ConfigRepository
     */
    get(key, defaultValue) {
        const value = utils_1.get(this.items, key, defaultValue);
        utils_2.assert.defined(value);
        return value;
    }
    /**
     * Set a given configuration value.
     *
     * @template T
     * @param {string} key
     * @param {T} value
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    set(key, value) {
        utils_1.set(this.items, key, value);
        return this.has(key);
    }
    /**
     * Unset a given configuration value.
     *
     * @param {string} key
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    unset(key) {
        utils_1.unset(this.items, key);
        return this.has(key);
    }
    /**
     * Determine if the given configuration value exists.
     *
     * @param {string} key
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    has(key) {
        return utils_1.has(this.items, key);
    }
    /**
     * Determine if the given configuration values exists.
     *
     * @param {string[]} keys
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    hasAll(keys) {
        for (const key of keys) {
            if (!utils_1.has(this.items, key)) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {KeyValuePair} items
     * @memberof ConfigRepository
     */
    merge(items) {
        this.items = { ...this.items, ...items };
    }
};
ConfigRepository = __decorate([
    ioc_1.injectable()
], ConfigRepository);
exports.ConfigRepository = ConfigRepository;
//# sourceMappingURL=repository.js.map