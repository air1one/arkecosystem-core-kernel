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
exports.LoadServiceProviders = void 0;
const ioc_1 = require("../../ioc");
const providers_1 = require("../../providers");
const config_1 = require("../../services/config");
const utils_1 = require("../../utils");
/**
 * @export
 * @class LoadServiceProviders
 * @implements {Bootstrapper}
 */
let LoadServiceProviders = class LoadServiceProviders {
    /**
     * @returns {Promise<void>}
     * @memberof RegisterProviders
     */
    async bootstrap() {
        const plugins = this.configRepository.get("app.plugins");
        utils_1.assert.defined(plugins);
        for (const plugin of plugins) {
            const serviceProvider = this.app.resolve(require(plugin.package).ServiceProvider);
            serviceProvider.setManifest(this.app.resolve(providers_1.PluginManifest).discover(plugin.package));
            serviceProvider.setConfig(this.discoverConfiguration(serviceProvider, plugin.options));
            this.serviceProviderRepository.set(plugin.package, serviceProvider);
            const alias = serviceProvider.alias();
            if (alias) {
                this.serviceProviderRepository.alias(plugin.package, alias);
            }
        }
    }
    /**
     * Discover the configuration for the package of the given service provider.
     *
     * @private
     * @param {ServiceProvider} serviceProvider
     * @param {JsonObject} options
     * @returns {PluginConfiguration}
     * @memberof LoadServiceProviders
     */
    discoverConfiguration(serviceProvider, options) {
        const serviceProviderName = serviceProvider.name();
        utils_1.assert.defined(serviceProviderName);
        const hasDefaults = Object.keys(serviceProvider.configDefaults()).length > 0;
        if (hasDefaults) {
            return this.app
                .resolve(providers_1.PluginConfiguration)
                .from(serviceProviderName, serviceProvider.configDefaults())
                .merge(options);
        }
        return this.app.resolve(providers_1.PluginConfiguration).discover(serviceProviderName).merge(options);
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], LoadServiceProviders.prototype, "app", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ConfigRepository),
    __metadata("design:type", config_1.ConfigRepository)
], LoadServiceProviders.prototype, "configRepository", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ServiceProviderRepository),
    __metadata("design:type", providers_1.ServiceProviderRepository)
], LoadServiceProviders.prototype, "serviceProviderRepository", void 0);
LoadServiceProviders = __decorate([
    ioc_1.injectable()
], LoadServiceProviders);
exports.LoadServiceProviders = LoadServiceProviders;
//# sourceMappingURL=load-service-providers.js.map