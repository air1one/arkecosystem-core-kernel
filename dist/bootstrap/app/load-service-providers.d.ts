import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class LoadServiceProviders
 * @implements {Bootstrapper}
 */
export declare class LoadServiceProviders implements Bootstrapper {
    /**
     * The application instance.
     *
     * @private
     * @type {Application}
     * @memberof Local
     */
    private readonly app;
    /**
     * @private
     * @type {ConfigRepository}
     * @memberof RegisterBasePaths
     */
    private readonly configRepository;
    /**
     * @private
     * @type {ServiceProviderRepository}
     * @memberof RegisterBasePaths
     */
    private readonly serviceProviderRepository;
    /**
     * @returns {Promise<void>}
     * @memberof RegisterProviders
     */
    bootstrap(): Promise<void>;
    /**
     * Discover the configuration for the package of the given service provider.
     *
     * @private
     * @param {ServiceProvider} serviceProvider
     * @param {JsonObject} options
     * @returns {PluginConfiguration}
     * @memberof LoadServiceProviders
     */
    private discoverConfiguration;
}
