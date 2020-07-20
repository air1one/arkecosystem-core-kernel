import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class RegisterBaseConfiguration
 * @extends {AbstractBootstrapper}
 */
export declare class RegisterBaseConfiguration implements Bootstrapper {
    /**
     * The application instance.
     *
     * @private
     * @type {Application}
     * @memberof Local
     */
    private readonly app;
    /**
     * The application configuration.
     *
     * @private
     * @type {ConfigRepository}
     * @memberof LoadCryptography
     */
    private readonly configRepository;
    /**
     * @param {Kernel.Application} app
     * @returns {Promise<void>}
     * @memberof RegisterBaseConfiguration
     */
    bootstrap(): Promise<void>;
}
