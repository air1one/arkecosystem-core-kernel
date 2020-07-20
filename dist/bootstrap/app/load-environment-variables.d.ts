import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class LoadEnvironmentVariables
 * @implements {Bootstrapper}
 */
export declare class LoadEnvironmentVariables implements Bootstrapper {
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
     * @memberof LoadEnvironmentVariables
     */
    bootstrap(): Promise<void>;
}
