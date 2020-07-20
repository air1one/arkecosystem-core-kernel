import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class LoadCryptography
 * @implements {Bootstrapper}
 */
export declare class LoadCryptography implements Bootstrapper {
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
     * @returns {Promise<void>}
     * @memberof LoadCryptography
     */
    bootstrap(): Promise<void>;
    /**
     * @private
     * @memberof LoadCryptography
     */
    private fromPreset;
    /**
     * @private
     * @memberof LoadCryptography
     */
    private fromConfigRepository;
}
