import { PackageJson } from "../types";
/**
 * @export
 * @class PluginManifest
 */
export declare class PluginManifest {
    /**
     * The loaded manifest.
     *
     * @private
     * @type {PackageJson}
     * @memberof PluginManifest
     */
    private manifest;
    /**
     * Get the manifest for the given package.
     *
     * @param {string} name
     * @returns {this}
     * @memberof PluginManifest
     */
    discover(name: string): this;
    /**
     * Get the specified manifest value.
     *
     * @template T
     * @param {string} key
     * @param {T} [defaultValue]
     * @returns {T}
     * @memberof PluginManifest
     */
    get<T>(key: string, defaultValue?: T): T;
    /**
     * Determine if the given manifest value exists.
     *
     * @param {string} key
     * @returns {boolean}
     * @memberof PluginManifest
     */
    has(key: string): boolean;
    /**
     * @param {PackageJson} manifest
     * @memberof PluginManifest
     */
    merge(manifest: PackageJson): this;
}
