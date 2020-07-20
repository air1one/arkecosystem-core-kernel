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
exports.ServiceProvider = void 0;
const contracts_1 = require("../contracts");
const ioc_1 = require("../ioc");
/**
 * @export
 * @abstract
 * @class ServiceProvider
 */
let ServiceProvider = class ServiceProvider {
    /**
     * Boot the service provider.
     *
     * @returns {Promise<void>}
     * @memberof ServiceProvider
     */
    async boot() {
        //
    }
    /**
     * Dispose the service provider.
     *
     * @returns {Promise<void>}
     * @memberof ServiceProvider
     */
    async dispose() {
        //
    }
    /**
     * Get the manifest of the service provider.
     *
     * @returns {PluginManifest}
     * @memberof ServiceProvider
     */
    manifest() {
        return this.packageManifest;
    }
    /**
     * Set the manifest of the service provider.
     *
     * @param {PluginManifest} manifest
     * @memberof ServiceProvider
     */
    setManifest(manifest) {
        this.packageManifest = manifest;
    }
    /**
     * Get the name of the service provider.
     *
     * @returns {string}
     * @memberof ServiceProvider
     */
    name() {
        if (this.packageManifest) {
            return this.packageManifest.get("name");
        }
        return undefined;
    }
    /**
     * Get the version of the service provider.
     *
     * @returns {string}
     * @memberof ServiceProvider
     */
    version() {
        if (this.packageManifest) {
            return this.packageManifest.get("version");
        }
        return undefined;
    }
    /**
     * Get the alias of the service provider.
     *
     * @returns {string}
     * @memberof ServiceProvider
     */
    alias() {
        if (this.packageManifest) {
            return this.packageManifest.get("arkecosystem.core.alias");
        }
        return undefined;
    }
    /**
     * Get the configuration of the service provider.
     *
     * @returns {PluginConfiguration}
     * @memberof ServiceProvider
     */
    config() {
        return this.packageConfiguration;
    }
    /**
     * Set the configuration of the service provider.
     *
     * @param {PluginConfiguration} config
     * @memberof ServiceProvider
     */
    setConfig(config) {
        this.packageConfiguration = config;
    }
    /**
     * Get the configuration defaults of the service provider.
     *
     * @returns {JsonObject}
     * @memberof ServiceProvider
     */
    configDefaults() {
        return {};
    }
    /**
     * Get the configuration schema of the service provider.
     *
     * @returns {object}
     * @memberof ServiceProvider
     */
    configSchema() {
        return {};
    }
    /**
     * Get the dependencies of the service provider.
     *
     * @returns {Kernel.PluginDependency[]}
     * @memberof ServiceProvider
     */
    dependencies() {
        if (this.packageManifest) {
            return this.packageManifest.get("arkecosystem.core.dependencies", []);
        }
        return [];
    }
    /**
     * Enable the service provider when the given conditions are met.
     *
     * @remarks
     * The [serviceProvider] variable will be undefined unless the [KernelEvent.ServiceProviderBooted]
     * event triggered a state change check in which case the name of the booteed service provider will be
     * passed down to this method as packages might rely on each other being booted in a specific order.
     *
     * @param {string} [serviceProvider]
     * @returns {Promise<boolean>}
     * @memberof ServiceProvider
     */
    async bootWhen(serviceProvider) {
        return true;
    }
    /**
     * Disable the service provider when the given conditions are met.
     *
     * @remarks
     * The [serviceProvider] variable will be undefined unless the [KernelEvent.ServiceProviderBooted]
     * event triggered a state change check in which case the name of the booteed service provider will be
     * passed down to this method as packages might rely on each other being booted in a specific order.
     *
     * @param {string} [serviceProvider]
     * @returns {Promise<boolean>}
     * @memberof ServiceProvider
     */
    async disposeWhen(serviceProvider) {
        return false;
    }
    /**
     * Determine if the package is required, which influences how bootstrapping errors are handled.
     *
     * @returns {Promise<boolean>}
     * @memberof ServiceProvider
     */
    async required() {
        if (this.packageManifest) {
            return this.packageManifest.get("arkecosystem.core.required", false);
        }
        return false;
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], ServiceProvider.prototype, "app", void 0);
ServiceProvider = __decorate([
    ioc_1.injectable()
], ServiceProvider);
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=service-provider.js.map