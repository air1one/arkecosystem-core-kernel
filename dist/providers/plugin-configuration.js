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
exports.PluginConfiguration = void 0;
const utils_1 = require("@arkecosystem/utils");
const ioc_1 = require("../ioc");
const config_1 = require("../services/config");
// todo: review the implementation
/**
 * @export
 * @class PluginConfiguration
 */
let PluginConfiguration = class PluginConfiguration {
    constructor() {
        /**
         * The loaded items.
         *
         * @private
         * @type {JsonObject}
         * @memberof PluginConfiguration
         */
        this.items = {};
    }
    /**
     * @param {string} name
     * @param {JsonObject} config
     * @returns {this}
     * @memberof PluginConfiguration
     */
    from(name, config) {
        this.items = config;
        this.mergeWithGlobal(name);
        return this;
    }
    /**
     * Get the configuration for the given package.
     *
     * @param {string} name
     * @returns {this}
     * @memberof PluginConfiguration
     */
    discover(name) {
        try {
            this.items = require(`${name}/dist/defaults.js`).defaults;
        }
        catch {
            // Failed to discover the defaults configuration file. This can be intentional.
        }
        this.mergeWithGlobal(name);
        return this;
    }
    /**
     * Merge the given values.
     *
     * @param {JsonObject} values
     * @returns {this}
     * @memberof PluginConfiguration
     */
    merge(values) {
        this.items = { ...this.items, ...values };
        return this;
    }
    /**
     * Get all of the configuration values.
     *
     * @returns {JsonObject}
     * @memberof PluginConfiguration
     */
    all() {
        return this.items;
    }
    /**
     * Get the specified value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue] deprecated
     * @returns {T}
     * @memberof PluginConfiguration
     */
    get(key, defaultValue) {
        if (typeof defaultValue !== "undefined") {
            throw new Error(`DEPRECATED get(${key}, ${defaultValue}), use getOptional instead`);
        }
        return utils_1.get(this.items, key);
    }
    /**
     * Get the specified required value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {T}
     * @memberof PluginConfiguration
     */
    getRequired(key) {
        if (!this.has(key)) {
            throw new Error(`Missing required ${key} configuration value`);
        }
        return utils_1.get(this.items, key);
    }
    /**
     * Get the specified optional value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {T}
     * @memberof PluginConfiguration
     */
    getOptional(key, defaultValue) {
        if (!this.has(key)) {
            return defaultValue;
        }
        return utils_1.get(this.items, key);
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
     * @template T
     * @param {string} key
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    unset(key) {
        utils_1.unset(this.items, key);
        return this.has(key);
    }
    /**
     * Determine if the given value exists.
     *
     * @param {string} key
     * @returns {boolean}
     * @memberof PluginConfiguration
     */
    has(key) {
        return utils_1.has(this.items, key);
    }
    /**
     * @private
     * @param {string} name
     * @memberof PluginConfiguration
     */
    mergeWithGlobal(name) {
        // @todo: better name for storing pluginOptions
        if (!this.configRepository.has(`app.pluginOptions.${name}`)) {
            return;
        }
        this.merge(this.configRepository.get(`app.pluginOptions.${name}`) || {});
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ConfigRepository),
    __metadata("design:type", config_1.ConfigRepository)
], PluginConfiguration.prototype, "configRepository", void 0);
PluginConfiguration = __decorate([
    ioc_1.injectable()
], PluginConfiguration);
exports.PluginConfiguration = PluginConfiguration;
//# sourceMappingURL=plugin-configuration.js.map