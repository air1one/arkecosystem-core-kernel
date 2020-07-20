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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterServiceProviders = void 0;
const semver_1 = __importDefault(require("semver"));
const contracts_1 = require("../../contracts");
const plugins_1 = require("../../exceptions/plugins");
const ioc_1 = require("../../ioc");
const utils_1 = require("../../utils");
// todo: review the implementation
/**
 * @export
 * @class RegisterServiceProviders
 * @implements {Bootstrapper}
 */
let RegisterServiceProviders = class RegisterServiceProviders {
    /**
     * @returns {Promise<void>}
     * @memberof RegisterProviders
     */
    async bootstrap() {
        const serviceProviders = this.app.get(ioc_1.Identifiers.ServiceProviderRepository);
        for (const [name, serviceProvider] of serviceProviders.all()) {
            const serviceProviderName = serviceProvider.name();
            utils_1.assert.defined(serviceProviderName);
            try {
                // Does the configuration conform to the given rules?
                await this.validateConfiguration(serviceProvider);
                // Are all dependencies installed with the correct versions?
                if (await this.satisfiesDependencies(serviceProvider)) {
                    await serviceProviders.register(name);
                }
            }
            catch (error) {
                console.error(error.stack);
                // Determine if the plugin is required to decide how to handle errors.
                const isRequired = await serviceProvider.required();
                if (isRequired) {
                    throw new plugins_1.ServiceProviderCannotBeRegistered(serviceProviderName, error.message);
                }
                serviceProviders.fail(serviceProviderName);
            }
        }
    }
    /**
     * @private
     * @param {ServiceProvider} serviceProvider
     * @returns {Promise<void>}
     * @memberof RegisterServiceProviders
     */
    async validateConfiguration(serviceProvider) {
        const configSchema = serviceProvider.configSchema();
        if (Object.keys(configSchema).length > 0) {
            const config = serviceProvider.config();
            const validator = this.app
                .get(ioc_1.Identifiers.ValidationManager)
                .driver();
            utils_1.assert.defined(validator);
            validator.validate(config.all(), configSchema);
            if (validator.fails()) {
                const serviceProviderName = serviceProvider.name();
                utils_1.assert.defined(serviceProviderName);
                throw new plugins_1.InvalidPluginConfiguration(serviceProviderName, validator.errors());
            }
            serviceProvider.setConfig(config.merge(validator.valid() || {}));
        }
    }
    /**
     * @private
     * @param {ServiceProvider} serviceProvider
     * @returns {Promise<boolean>}
     * @memberof RegisterProviders
     */
    async satisfiesDependencies(serviceProvider) {
        const serviceProviders = this.app.get(ioc_1.Identifiers.ServiceProviderRepository);
        for (const dependency of serviceProvider.dependencies()) {
            const { name, version: constraint, required } = dependency;
            const isRequired = typeof required === "function" ? await required() : !!required;
            const serviceProviderName = serviceProvider.name();
            utils_1.assert.defined(serviceProviderName);
            if (!serviceProviders.has(name)) {
                // The dependency is necessary for this package to function. We'll output an error and terminate the process.
                if (isRequired) {
                    const error = new plugins_1.RequiredDependencyCannotBeFound(serviceProviderName, name);
                    await this.app.terminate(error.message, error);
                }
                // The dependency is optional for this package to function. We'll only output a warning.
                const error = new plugins_1.OptionalDependencyCannotBeFound(serviceProviderName, name);
                this.logger.warning(error.message);
                serviceProviders.fail(serviceProviderName);
                return false;
            }
            if (constraint) {
                const version = serviceProviders.get(name).version();
                utils_1.assert.defined(version);
                if (!semver_1.default.satisfies(version, constraint)) {
                    const error = new plugins_1.DependencyVersionOutOfRange(name, constraint, version);
                    if (isRequired) {
                        await this.app.terminate(error.message, error);
                    }
                    this.logger.warning(error.message);
                    serviceProviders.fail(serviceProviderName);
                }
            }
        }
        return true;
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], RegisterServiceProviders.prototype, "app", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.LogService),
    __metadata("design:type", Object)
], RegisterServiceProviders.prototype, "logger", void 0);
RegisterServiceProviders = __decorate([
    ioc_1.injectable()
], RegisterServiceProviders);
exports.RegisterServiceProviders = RegisterServiceProviders;
//# sourceMappingURL=register-service-providers.js.map