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
exports.ServiceProviderRepository = void 0;
const enums_1 = require("../enums");
const logic_1 = require("../exceptions/logic");
const ioc_1 = require("../ioc");
const utils_1 = require("../utils");
/**
 * @export
 * @class ServiceProviderRepository
 */
let ServiceProviderRepository = class ServiceProviderRepository {
    constructor() {
        /**
         * All of the registered service providers.
         *
         * @private
         * @type {Map<string, ServiceProvider>}
         * @memberof ServiceProviderRepository
         */
        this.serviceProviders = new Map();
        /**
         * The names of the loaded service providers.
         *
         * @private
         * @type {Set<string>}
         * @memberof ServiceProviderRepository
         */
        this.loadedProviders = new Set();
        /**
         * The names of the failed service providers.
         *
         * @private
         * @type {Map<string, ServiceProvider>}
         * @memberof ServiceProviderRepository
         */
        this.failedProviders = new Set();
        /**
         * The names of the deferred service providers.
         *
         * @private
         * @type {Map<string, ServiceProvider>}
         * @memberof ServiceProviderRepository
         */
        this.deferredProviders = new Set();
        /**
         * All of the registered service provider aliases.
         *
         * @private
         * @type {Map<string, string>}
         * @memberof ServiceProviderRepository
         */
        this.aliases = new Map();
    }
    /**
     * @returns {Array<[string, ServiceProvider]>}
     * @memberof ServiceProviderRepository
     */
    all() {
        return [...this.serviceProviders.entries()];
    }
    /**
     * @returns {ServiceProvider[]}
     * @memberof ServiceProviderRepository
     */
    allLoadedProviders() {
        return [...this.loadedProviders.values()].map((name) => this.get(name));
    }
    /**
     * @param {string} name
     * @returns {ServiceProvider}
     * @memberof ServiceProviderRepository
     */
    get(name) {
        const serviceProvider = this.serviceProviders.get(this.aliases.get(name) || name);
        utils_1.assert.defined(serviceProvider);
        return serviceProvider;
    }
    /**
     * @param {string} name
     * @param {ServiceProvider} provider
     * @memberof ServiceProviderRepository
     */
    set(name, provider) {
        this.serviceProviders.set(name, provider);
    }
    /**
     * @param {string} name
     * @param {string} alias
     * @memberof ServiceProviderRepository
     */
    alias(name, alias) {
        if (this.aliases.has(alias)) {
            throw new logic_1.InvalidArgumentException(`The alias [${alias}] is already in use.`);
        }
        if (!this.serviceProviders.has(name)) {
            throw new logic_1.InvalidArgumentException(`The service provider [${name}] is unknown.`);
        }
        this.aliases.set(alias, name);
    }
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof ServiceProviderRepository
     */
    has(name) {
        return this.serviceProviders.has(name);
    }
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof ServiceProviderRepository
     */
    loaded(name) {
        return this.loadedProviders.has(name);
    }
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof ServiceProviderRepository
     */
    failed(name) {
        return this.failedProviders.has(name);
    }
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof ServiceProviderRepository
     */
    deferred(name) {
        return this.deferredProviders.has(name);
    }
    /**
     * @param {string} name
     * @memberof ServiceProviderRepository
     */
    load(name) {
        this.loadedProviders.add(name);
    }
    /**
     * @param {string} name
     * @memberof ServiceProviderRepository
     */
    fail(name) {
        this.failedProviders.add(name);
    }
    /**
     * @param {string} name
     * @memberof ServiceProviderRepository
     */
    defer(name) {
        this.deferredProviders.add(name);
    }
    /**
     * Register the given provider.
     *
     * @param {ServiceProvider} provider
     * @returns {Promise<void>}
     * @memberof ServiceProviderRepository
     */
    async register(name) {
        const serviceProvider = this.get(name);
        this.app
            .bind(ioc_1.Identifiers.PluginConfiguration)
            .toConstantValue(serviceProvider.config())
            .whenTargetTagged("plugin", name);
        await serviceProvider.register();
        await this.eventDispatcher.dispatch(enums_1.KernelEvent.ServiceProviderRegistered, { name });
    }
    /**
     * Boot the given provider.
     *
     * @param {ServiceProvider} provider
     * @returns {Promise<void>}
     * @memberof ServiceProviderRepository
     */
    async boot(name) {
        await this.get(name).boot();
        await this.eventDispatcher.dispatch(enums_1.KernelEvent.ServiceProviderBooted, { name });
        this.loadedProviders.add(name);
        this.failedProviders.delete(name);
        this.deferredProviders.delete(name);
    }
    /**
     * Dispose the given provider.
     *
     * @param {ServiceProvider} provider
     * @returns {Promise<void>}
     * @memberof ServiceProviderRepository
     */
    async dispose(name) {
        await this.get(name).dispose();
        await this.eventDispatcher.dispatch(enums_1.KernelEvent.ServiceProviderDisposed, { name });
        this.loadedProviders.delete(name);
        this.failedProviders.delete(name);
        this.deferredProviders.add(name);
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], ServiceProviderRepository.prototype, "app", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.EventDispatcherService),
    __metadata("design:type", Object)
], ServiceProviderRepository.prototype, "eventDispatcher", void 0);
ServiceProviderRepository = __decorate([
    ioc_1.injectable()
], ServiceProviderRepository);
exports.ServiceProviderRepository = ServiceProviderRepository;
//# sourceMappingURL=service-provider-repository.js.map