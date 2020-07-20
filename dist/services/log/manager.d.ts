import { Logger } from "../../contracts/kernel/log";
import { InstanceManager } from "../../support/instance-manager";
/**
 * @export
 * @class LogManager
 * @extends {Manager<Logger>}
 */
export declare class LogManager extends InstanceManager<Logger> {
    /**
     * Create an instance of the Memory driver.
     *
     * @protected
     * @returns {Promise<Logger>}
     * @memberof LogManager
     */
    protected createMemoryDriver(): Promise<Logger>;
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof LogManager
     */
    protected getDefaultDriver(): string;
}
