"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const Bootstrappers = __importStar(require("./bootstrap"));
const enums_1 = require("./enums");
const filesystem_1 = require("./exceptions/filesystem");
const ioc_1 = require("./ioc");
const providers_1 = require("./providers");
// import { ShutdownSignal } from "./enums/process";
const config_1 = require("./services/config");
const service_provider_1 = require("./services/events/service-provider");
/**
 * @export
 * @class Application
 * @extends {Container}
 * @implements {Application}
 */
class Application {
    /**
     * Creates an instance of Application.
     *
     * @param {Contracts.Kernel.Container.Container} container
     * @memberof Contracts.Kernel.Application
     */
    constructor(container) {
        // todo: enable this after solving the event emitter limit issues
        // this.listenToShutdownSignals();
        this.container = container;
        /**
         * @private
         * @type {boolean}
         * @memberof Application
         */
        this.booted = false;
        this.bind(ioc_1.Identifiers.Application).toConstantValue(this);
        this.bind(ioc_1.Identifiers.ConfigRepository).to(config_1.ConfigRepository).inSingletonScope();
        this.bind(ioc_1.Identifiers.ServiceProviderRepository)
            .to(providers_1.ServiceProviderRepository)
            .inSingletonScope();
    }
    /**
     * @param {{ flags: JsonObject; plugins: JsonObject; }} options
     * @returns {Promise<void>}
     * @memberof Application
     */
    async bootstrap(options) {
        this.bind(ioc_1.Identifiers.ConfigFlags).toConstantValue(options.flags);
        this.bind(ioc_1.Identifiers.ConfigPlugins).toConstantValue(options.plugins || {});
        await this.registerEventDispatcher();
        await this.bootstrapWith("app");
    }
    /**
     * @returns {Promise<void>}
     * @memberof Application
     */
    async boot() {
        await this.bootstrapWith("serviceProviders");
        this.booted = true;
    }
    /**
     * @returns {Promise<void>}
     * @memberof Application
     */
    async reboot() {
        await this.disposeServiceProviders();
        await this.boot();
    }
    /**
     * @template T
     * @param {string} key
     * @param {T} [value]
     * @returns {T}
     * @memberof Application
     */
    config(key, value) {
        const config = this.get(ioc_1.Identifiers.ConfigRepository);
        if (value) {
            config.set(key, value);
        }
        return config.get(key);
    }
    /**
     * @returns {string}
     * @memberof Application
     */
    dirPrefix() {
        return this.get(ioc_1.Identifiers.ApplicationDirPrefix);
    }
    /**
     * @returns {string}
     * @memberof Application
     */
    namespace() {
        return this.get(ioc_1.Identifiers.ApplicationNamespace);
    }
    /**
     * @returns {string}
     * @memberof Application
     */
    version() {
        return this.get(ioc_1.Identifiers.ApplicationVersion);
    }
    /**
     * @returns {string}
     * @memberof Application
     */
    token() {
        return this.get(ioc_1.Identifiers.ApplicationToken);
    }
    /**
     * @returns {string}
     * @memberof Application
     */
    network() {
        return this.get(ioc_1.Identifiers.ApplicationNetwork);
    }
    /**
     * @param {string} value
     * @memberof Application
     */
    useNetwork(value) {
        this.rebind(ioc_1.Identifiers.ApplicationNetwork).toConstantValue(value);
    }
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    dataPath(path = "") {
        return path_1.join(this.getPath("data"), path);
    }
    /**
     * @param {string} path
     * @memberof Application
     */
    useDataPath(path) {
        this.usePath("data", path);
    }
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    configPath(path = "") {
        return path_1.join(this.getPath("config"), path);
    }
    /**
     * @param {string} path
     * @memberof Application
     */
    useConfigPath(path) {
        this.usePath("config", path);
    }
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    cachePath(path = "") {
        return path_1.join(this.getPath("cache"), path);
    }
    /**
     * @param {string} path
     * @memberof Application
     */
    useCachePath(path) {
        this.usePath("cache", path);
    }
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    logPath(path = "") {
        return path_1.join(this.getPath("log"), path);
    }
    /**
     * @param {string} path
     * @memberof Application
     */
    useLogPath(path) {
        this.usePath("log", path);
    }
    /**
     * @param {string} [path=""]
     * @returns {string}
     * @memberof Application
     */
    tempPath(path = "") {
        return path_1.join(this.getPath("temp"), path);
    }
    /**
     * @param {string} path
     * @memberof Application
     */
    useTempPath(path) {
        this.usePath("temp", path);
    }
    /**
     * @returns {string}
     * @memberof Application
     */
    environmentFile() {
        return this.configPath(".env");
    }
    /**
     * @returns {string}
     * @memberof Application
     */
    environment() {
        return this.get(ioc_1.Identifiers.ApplicationEnvironment);
    }
    /**
     * @param {string} value
     * @memberof Application
     */
    useEnvironment(value) {
        this.rebind(ioc_1.Identifiers.ApplicationEnvironment).toConstantValue(value);
    }
    /**
     * @returns {boolean}
     * @memberof Application
     */
    isProduction() {
        return this.environment() === "production" || this.network() === "mainnet";
    }
    /**
     * @returns {boolean}
     * @memberof Application
     */
    isDevelopment() {
        return this.environment() === "development" || ["devnet", "testnet"].includes(this.network());
    }
    /**
     * @returns {boolean}
     * @memberof Application
     */
    runningTests() {
        return this.environment() === "test" || this.network() === "testnet";
    }
    /**
     * @returns {boolean}
     * @memberof Application
     */
    isBooted() {
        return this.booted;
    }
    /**
     * @memberof Application
     */
    enableMaintenance() {
        fs_extra_1.writeFileSync(this.tempPath("maintenance"), JSON.stringify({ time: +new Date() }));
        this.get(ioc_1.Identifiers.LogService).notice("Application is now in maintenance mode.");
        this.get(ioc_1.Identifiers.EventDispatcherService).dispatch("kernel.maintenance", true);
    }
    /**
     * @memberof Application
     */
    disableMaintenance() {
        fs_extra_1.removeSync(this.tempPath("maintenance"));
        this.get(ioc_1.Identifiers.LogService).notice("Application is now live.");
        this.get(ioc_1.Identifiers.EventDispatcherService).dispatch("kernel.maintenance", false);
    }
    /**
     * @returns {boolean}
     * @memberof Application
     */
    isDownForMaintenance() {
        return fs_extra_1.existsSync(this.tempPath("maintenance"));
    }
    /**
     * @param {string} [reason]
     * @param {Error} [error]
     * @returns {Promise<void>}
     * @memberof Application
     */
    async terminate(reason, error) {
        this.booted = false;
        if (reason) {
            this.get(ioc_1.Identifiers.LogService).notice(reason);
        }
        if (error) {
            this.get(ioc_1.Identifiers.LogService).notice(error.message);
        }
        await this.disposeServiceProviders();
    }
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {Contracts.Kernel.Container.BindingToSyntax<T>}
     * @memberof Application
     */
    bind(serviceIdentifier) {
        return this.container.bind(serviceIdentifier);
    }
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {Contracts.Kernel.Container.BindingToSyntax<T>}
     * @memberof Application
     */
    rebind(serviceIdentifier) {
        if (this.container.isBound(serviceIdentifier)) {
            this.container.unbind(serviceIdentifier);
        }
        return this.container.bind(serviceIdentifier);
    }
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {void}
     * @memberof Application
     */
    unbind(serviceIdentifier) {
        return this.container.unbind(serviceIdentifier);
    }
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {T}
     * @memberof Application
     */
    get(serviceIdentifier) {
        return this.container.get(serviceIdentifier);
    }
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @param {string|number|symbol} key
     * @param {any} value
     * @returns {T}
     * @memberof Application
     */
    getTagged(serviceIdentifier, key, value) {
        return this.container.getTagged(serviceIdentifier, key, value);
    }
    /**
     * @template T
     * @param {Contracts.Kernel.Container.ServiceIdentifier<T>} serviceIdentifier
     * @returns {boolean}
     * @memberof Application
     */
    isBound(serviceIdentifier) {
        return this.container.isBound(serviceIdentifier);
    }
    /**
     * @template T
     * @param {Contracts.Kernel.Container.Newable<T>} constructorFunction
     * @returns {T}
     * @memberof Application
     */
    resolve(constructorFunction) {
        return this.container.resolve(constructorFunction);
    }
    /**
     * Run the given type of bootstrap classes.
     *
     * @param {string} type
     * @returns {Promise<void>}
     * @memberof Application
     */
    async bootstrapWith(type) {
        const bootstrappers = Object.values(Bootstrappers[type]);
        const events = this.get(ioc_1.Identifiers.EventDispatcherService);
        for (const bootstrapper of bootstrappers) {
            events.dispatch(enums_1.KernelEvent.Bootstrapping, { bootstrapper: bootstrapper.name });
            await this.resolve(bootstrapper).bootstrap();
            events.dispatch(enums_1.KernelEvent.Bootstrapped, { bootstrapper: bootstrapper.name });
        }
    }
    /**
     * @private
     * @returns {Promise<void>}
     * @memberof Application
     */
    async registerEventDispatcher() {
        await this.resolve(service_provider_1.ServiceProvider).register();
    }
    /**
     * @private
     * @returns {Promise<void>}
     * @memberof Application
     */
    async disposeServiceProviders() {
        const serviceProviders = this.get(ioc_1.Identifiers.ServiceProviderRepository).allLoadedProviders();
        for (const serviceProvider of serviceProviders.reverse()) {
            this.get(ioc_1.Identifiers.LogService).debug(`Disposing ${serviceProvider.name()}...`);
            try {
                await serviceProvider.dispose();
            }
            catch { }
        }
    }
    /**
     * @private
     * @param {string} type
     * @returns {string}
     * @memberof Application
     */
    getPath(type) {
        const path = this.get(`path.${type}`);
        if (!fs_extra_1.existsSync(path)) {
            throw new filesystem_1.DirectoryCannotBeFound(path);
        }
        return path;
    }
    /**
     * @private
     * @param {string} type
     * @param {string} path
     * @memberof Application
     */
    usePath(type, path) {
        if (!fs_extra_1.existsSync(path)) {
            throw new filesystem_1.DirectoryCannotBeFound(path);
        }
        this.rebind(`path.${type}`).toConstantValue(path);
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map