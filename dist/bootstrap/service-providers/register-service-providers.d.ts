import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class RegisterServiceProviders
 * @implements {Bootstrapper}
 */
export declare class RegisterServiceProviders implements Bootstrapper {
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
     * @type {Contracts.Kernel.Logger}
     * @memberof Local
     */
    private readonly logger;
    /**
     * @returns {Promise<void>}
     * @memberof RegisterProviders
     */
    bootstrap(): Promise<void>;
    /**
     * @private
     * @param {ServiceProvider} serviceProvider
     * @returns {Promise<void>}
     * @memberof RegisterServiceProviders
     */
    private validateConfiguration;
    /**
     * @private
     * @param {ServiceProvider} serviceProvider
     * @returns {Promise<boolean>}
     * @memberof RegisterProviders
     */
    private satisfiesDependencies;
}
