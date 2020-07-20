import { Application } from "../../../contracts/kernel";
import { ConfigLoader } from "../../../contracts/kernel/config";
/**
 * @export
 * @class LocalConfigLoader
 * @implements {ConfigLoader}
 */
export declare class LocalConfigLoader implements ConfigLoader {
    /**
     * The application instance.
     *
     * @protected
     * @type {Application}
     * @memberof LocalConfigLoader
     */
    protected readonly app: Application;
    /**
     * The application configuration.
     *
     * @private
     * @type {ConfigRepository}
     * @memberof LoadCryptography
     */
    private readonly configRepository;
    /**
     * @private
     * @type {ValidationService}
     * @memberof LoadCryptography
     */
    private readonly validationService;
    /**
     * @returns {Promise<void>}
     * @memberof LocalConfigLoader
     */
    loadEnvironmentVariables(): Promise<void>;
    /**
     * @returns {Promise<void>}
     * @memberof LocalConfigLoader
     */
    loadConfiguration(): Promise<void>;
    /**
     * @private
     * @returns {void}
     * @memberof LocalConfigLoader
     */
    private loadApplication;
    /**
     * @private
     * @returns {void}
     * @memberof LocalConfigLoader
     */
    private loadPeers;
    /**
     * @private
     * @returns {void}
     * @memberof LocalConfigLoader
     */
    private loadDelegates;
    /**
     * @private
     * @returns {void}
     * @memberof LocalConfigLoader
     */
    private loadCryptography;
    /**
     * @private
     * @param {string[]} files
     * @returns {KeyValuePair}
     * @memberof LocalConfigLoader
     */
    private loadFromLocation;
}
