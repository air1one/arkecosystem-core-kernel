import { JsonObject, KeyValuePair } from "../../types";
/**
 * @export
 * @class ConfigRepository
 * @extends {Map<string, any>}
 */
export declare class ConfigRepository {
    /**
     * All of the configuration items.
     *
     * @private
     * @type {JsonObject}
     * @memberof ConfigRepository
     */
    private items;
    /**
     * Get all configuration values.
     *
     * @returns {JsonObject}
     * @memberof ConfigRepository
     */
    all(): JsonObject;
    /**
     * Get the specified configuration value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {T}
     * @memberof ConfigRepository
     */
    get<T>(key: string, defaultValue?: T): T;
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
     * @param {string} key
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    unset(key: string): boolean;
    /**
     * Determine if the given configuration value exists.
     *
     * @param {string} key
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    has(key: string): boolean;
    /**
     * Determine if the given configuration values exists.
     *
     * @param {string[]} keys
     * @returns {boolean}
     * @memberof ConfigRepository
     */
    hasAll(keys: string[]): boolean;
    /**
     * @param {KeyValuePair} items
     * @memberof ConfigRepository
     */
    merge(items: KeyValuePair): void;
}
