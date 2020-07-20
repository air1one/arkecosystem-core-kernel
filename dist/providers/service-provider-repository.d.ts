import { ServiceProvider } from "./service-provider";
/**
 * @export
 * @class ServiceProviderRepository
 */
export declare class ServiceProviderRepository {
    /**
     * The application instance.
     *
     * @private
     * @type {Application}
     * @memberof ServiceProviderRepository
     */
    private readonly app;
    /**
     * @private
     * @type {EventDispatcher}
     * @memberof ServiceProviderRepository
     */
    private readonly eventDispatcher;
    /**
     * All of the registered service providers.
     *
     * @private
     * @type {Map<string, ServiceProvider>}
     * @memberof ServiceProviderRepository
     */
    private readonly serviceProviders;
    /**
     * The names of the loaded service providers.
     *
     * @private
     * @type {Set<string>}
     * @memberof ServiceProviderRepository
     */
    private readonly loadedProviders;
    /**
     * The names of the failed service providers.
     *
     * @private
     * @type {Map<string, ServiceProvider>}
     * @memberof ServiceProviderRepository
     */
    private readonly failedProviders;
    /**
     * The names of the deferred service providers.
     *
     * @private
     * @type {Map<string, ServiceProvider>}
     * @memberof ServiceProviderRepository
     */
    private readonly deferredProviders;
    /**
     * All of the registered service provider aliases.
     *
     * @private
     * @type {Map<string, string>}
     * @memberof ServiceProviderRepository
     */
    private readonly aliases;
    /**
     * @returns {Array<[string, ServiceProvider]>}
     * @memberof ServiceProviderRepository
     */
    all(): Array<[string, ServiceProvider]>;
    /**
     * @returns {ServiceProvider[]}
     * @memberof ServiceProviderRepository
     */
    allLoadedProviders(): ServiceProvider[];
    /**
     * @param {string} name
     * @returns {ServiceProvider}
     * @memberof ServiceProviderRepository
     */
    get(name: string): ServiceProvider;
    /**
     * @param {string} name
     * @param {ServiceProvider} provider
     * @memberof ServiceProviderRepository
     */
    set(name: string, provider: ServiceProvider): void;
    /**
     * @param {string} name
     * @param {string} alias
     * @memberof ServiceProviderRepository
     */
    alias(name: string, alias: string): void;
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof ServiceProviderRepository
     */
    has(name: string): boolean;
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof ServiceProviderRepository
     */
    loaded(name: string): boolean;
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof ServiceProviderRepository
     */
    failed(name: string): boolean;
    /**
     * @param {string} name
     * @returns {boolean}
     * @memberof ServiceProviderRepository
     */
    deferred(name: string): boolean;
    /**
     * @param {string} name
     * @memberof ServiceProviderRepository
     */
    load(name: string): void;
    /**
     * @param {string} name
     * @memberof ServiceProviderRepository
     */
    fail(name: string): void;
    /**
     * @param {string} name
     * @memberof ServiceProviderRepository
     */
    defer(name: string): void;
    /**
     * Register the given provider.
     *
     * @param {ServiceProvider} provider
     * @returns {Promise<void>}
     * @memberof ServiceProviderRepository
     */
    register(name: string): Promise<void>;
    /**
     * Boot the given provider.
     *
     * @param {ServiceProvider} provider
     * @returns {Promise<void>}
     * @memberof ServiceProviderRepository
     */
    boot(name: string): Promise<void>;
    /**
     * Dispose the given provider.
     *
     * @param {ServiceProvider} provider
     * @returns {Promise<void>}
     * @memberof ServiceProviderRepository
     */
    dispose(name: string): Promise<void>;
}
