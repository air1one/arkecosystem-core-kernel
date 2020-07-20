import { ConfigLoader } from "../../contracts/kernel/config";
import { InstanceManager } from "../../support/instance-manager";
/**
 * @export
 * @class ConfigManager
 * @extends {Manager<ConfigLoader>}
 */
export declare class ConfigManager extends InstanceManager<ConfigLoader> {
    /**
     * Create an instance of the Local driver.
     *
     * @protected
     * @returns {Promise<ConfigLoader>}
     * @memberof ConfigManager
     */
    protected createLocalDriver(): Promise<ConfigLoader>;
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof ConfigManager
     */
    protected getDefaultDriver(): string;
}
