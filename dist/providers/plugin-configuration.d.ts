import { JsonObject } from "../types";
/**
 * @export
 * @class PluginConfiguration
 */
export declare class PluginConfiguration {
    /**
     * @private
     * @type {ConfigRepository}
     * @memberof RegisterBasePaths
     */
    private readonly configRepository;
    /**
     * The loaded items.
     *
     * @private
     * @type {JsonObject}
     * @memberof PluginConfiguration
     */
    private items;
    /**
     * @param {string} name
     * @param {JsonObject} config
     * @returns {this}
     * @memberof PluginConfiguration
     */
    from(name: string, config: JsonObject): this;
    /**
     * Get the configuration for the given package.
     *
     * @param {string} name
     * @returns {this}
     * @memberof PluginConfiguration
     */
    discover(name: string): this;
    /**
     * Merge the given values.
     *
     * @param {JsonObject} values
     * @returns {this}
     * @memberof PluginConfiguration
     */
    merge(values: JsonObject): this;
    /**
     * Get all of the configuration values.
     *
     * @returns {JsonObject}
     * @memberof PluginConfiguration
     */
    all(): JsonObject;
    /**
     * Get the specified value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue] deprecated
     * @returns {T}
     * @memberof PluginConfiguration
     */
    get<T>(key: string, defaultValue?: T): T | undefined;
    /**
     * Get the specified required value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {T}
     * @memberof PluginConfiguration
     */
    getRequired<T>(key: string): T;
    /**
     * Get the specified optional value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {T}
     * @memberof PluginConfiguration
     */
    getOptional<T>(key: string, defaultValue: T): T;
    /**
     * Set a given configuration value.
     *
     * @template T
     * @param {string} key
     * @param {T} value
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    set<T>(key: string, value: T): boolean;
    /**
     * Unset a given configuration value.
     *
     * @template T
     * @param {string} key
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    unset<T>(key: string): boolean;
    /**
     * Determine if the given value exists.
     *
     * @param {string} key
     * @returns {boolean}
     * @memberof PluginConfiguration
     */
    has(key: string): boolean;
    /**
     * @private
     * @param {string} name
     * @memberof PluginConfiguration
     */
    private mergeWithGlobal;
}
