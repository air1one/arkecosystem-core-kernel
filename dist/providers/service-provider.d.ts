import { Kernel } from "../contracts";
import { JsonObject } from "../types";
import { PluginConfiguration } from "./plugin-configuration";
import { PluginManifest } from "./plugin-manifest";
/**
 * @export
 * @abstract
 * @class ServiceProvider
 */
export declare abstract class ServiceProvider {
    /**
     * The application instance.
     *
     * @protected
     * @type {Kernel.Application}
     * @memberof Manager
     */
    protected readonly app: Kernel.Application;
    /**
     * The application instance.
     *
     * @private
     * @type {PluginConfiguration}
     * @memberof ServiceProvider
     */
    private packageConfiguration;
    /**
     * The loaded manifest.
     *
     * @private
     * @type {PluginManifest}
     * @memberof PluginManifest
     */
    private packageManifest;
    /**
     * Boot the service provider.
     *
     * @returns {Promise<void>}
     * @memberof ServiceProvider
     */
    boot(): Promise<void>;
    /**
     * Dispose the service provider.
     *
     * @returns {Promise<void>}
     * @memberof ServiceProvider
     */
    dispose(): Promise<void>;
    /**
     * Get the manifest of the service provider.
     *
     * @returns {PluginManifest}
     * @memberof ServiceProvider
     */
    manifest(): PluginManifest;
    /**
     * Set the manifest of the service provider.
     *
     * @param {PluginManifest} manifest
     * @memberof ServiceProvider
     */
    setManifest(manifest: PluginManifest): void;
    /**
     * Get the name of the service provider.
     *
     * @returns {string}
     * @memberof ServiceProvider
     */
    name(): string | undefined;
    /**
     * Get the version of the service provider.
     *
     * @returns {string}
     * @memberof ServiceProvider
     */
    version(): string | undefined;
    /**
     * Get the alias of the service provider.
     *
     * @returns {string}
     * @memberof ServiceProvider
     */
    alias(): string | undefined;
    /**
     * Get the configuration of the service provider.
     *
     * @returns {PluginConfiguration}
     * @memberof ServiceProvider
     */
    config(): PluginConfiguration;
    /**
     * Set the configuration of the service provider.
     *
     * @param {PluginConfiguration} config
     * @memberof ServiceProvider
     */
    setConfig(config: PluginConfiguration): void;
    /**
     * Get the configuration defaults of the service provider.
     *
     * @returns {JsonObject}
     * @memberof ServiceProvider
     */
    configDefaults(): JsonObject;
    /**
     * Get the configuration schema of the service provider.
     *
     * @returns {object}
     * @memberof ServiceProvider
     */
    configSchema(): object;
    /**
     * Get the dependencies of the service provider.
     *
     * @returns {Kernel.PluginDependency[]}
     * @memberof ServiceProvider
     */
    dependencies(): Kernel.PluginDependency[];
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
    bootWhen(serviceProvider?: string): Promise<boolean>;
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
    disposeWhen(serviceProvider?: string): Promise<boolean>;
    /**
     * Determine if the package is required, which influences how bootstrapping errors are handled.
     *
     * @returns {Promise<boolean>}
     * @memberof ServiceProvider
     */
    required(): Promise<boolean>;
    /**
     * Register the service provider.
     *
     * @abstract
     * @returns {Promise<void>}
     * @memberof ServiceProvider
     */
    abstract register(): Promise<void>;
}
