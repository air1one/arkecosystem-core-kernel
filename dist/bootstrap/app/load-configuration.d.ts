import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class LoadConfiguration
 * @implements {Bootstrapper}
 */
export declare class LoadConfiguration implements Bootstrapper {
    /**
     * The application instance.
     *
     * @private
     * @type {Application}
     * @memberof Local
     */
    private readonly app;
    /**
     * @returns {Promise<void>}
     * @memberof LoadConfiguration
     */
    bootstrap(): Promise<void>;
}
