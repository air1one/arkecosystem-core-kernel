import { Kernel } from "../contracts";
/**
 * @export
 * @abstract
 * @class InstanceManager
 * @template T
 */
export declare abstract class InstanceManager<T> {
    /**
     * The application instance.
     *
     * @protected
     * @type {Kernel.Application}
     * @memberof InstanceManager
     */
    protected readonly app: Kernel.Application;
    /**
     * @private
     * @type {string}
     * @memberof InstanceManager
     */
    private defaultDriver;
    /**
     * The array of created "drivers".
     *
     * @private
     * @type {Map<string, T>}
     * @memberof InstanceManager
     */
    private drivers;
    /**
     * Create a new manager instance.
     *
     * @memberof InstanceManager
     */
    constructor();
    /**
     * Boot the default driver.
     *
     * @memberof InstanceManager
     */
    boot(): Promise<void>;
    /**
     * Get a driver instance.
     *
     * @param {string} [name]
     * @returns {T}
     * @memberof InstanceManager
     */
    driver(name?: string): T;
    /**
     * Register and call a custom driver creator.
     *
     * @param {string} name
     * @param {(app: Kernel.Application) => T} callback
     * @memberof InstanceManager
     */
    extend(name: string, callback: (app: Kernel.Application) => Promise<T>): Promise<void>;
    /**
     * Set the default driver name.
     *
     * @param {string} name
     * @memberof InstanceManager
     */
    setDefaultDriver(name: string): void;
    /**
     * Get all of the created drivers.
     *
     * @returns {T[]}
     * @memberof InstanceManager
     */
    getDrivers(): T[];
    /**
     * Create a new driver instance.
     *
     * @private
     * @param {string} name
     * @memberof InstanceManager
     */
    private createDriver;
    /**
     * Get the default driver name.
     *
     * @protected
     * @abstract
     * @returns {string}
     * @memberof InstanceManager
     */
    protected abstract getDefaultDriver(): string;
}
