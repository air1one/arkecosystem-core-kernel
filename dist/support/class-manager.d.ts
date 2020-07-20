import { Kernel } from "../contracts";
/**
 * @export
 * @class ClassManager
 */
export declare abstract class ClassManager {
    /**
     * The application instance.
     *
     * @protected
     * @type {Kernel.Application}
     * @memberof ClassManager
     */
    protected readonly app: Kernel.Application;
    /**
     * @private
     * @type {string}
     * @memberof ClassManager
     */
    private defaultDriver;
    /**
     * Create a new manager instance.
     *
     * @memberof ClassManager
     */
    constructor();
    /**
     * Get a driver instance.
     *
     * @param {string} [name]
     * @returns {Class}
     * @memberof ClassManager
     */
    driver<T>(name?: string): Promise<T>;
    /**
     * Set the default driver name.
     *
     * @param {string} name
     * @memberof ClassManager
     */
    setDefaultDriver(name: string): void;
    /**
     * Create a new driver instance.
     *
     * @private
     * @param {string} name
     * @memberof ClassManager
     */
    private createDriver;
    /**
     * Get the default driver name.
     *
     * @protected
     * @abstract
     * @returns {string}
     * @memberof ClassManager
     */
    protected abstract getDefaultDriver(): string;
}
