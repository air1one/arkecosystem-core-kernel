import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class WatchConfiguration
 * @implements {Bootstrapper}
 */
export declare class WatchConfiguration implements Bootstrapper {
    /**
     * The application instance.
     *
     * @private
     * @type {Application}
     * @memberof WatchConfiguration
     */
    private readonly app;
    /**
     * @returns {Promise<void>}
     * @memberof WatchConfiguration
     */
    bootstrap(): Promise<void>;
}
