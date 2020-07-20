import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class RegisterBaseServiceProviders
 * @implements {Bootstrapper}
 */
export declare class RegisterBaseServiceProviders implements Bootstrapper {
    /**
     * The application instance.
     *
     * @private
     * @type {Application}
     * @memberof Local
     */
    private readonly app;
    /**
     * @param {Kernel.Application} app
     * @returns {Promise<void>}
     * @memberof RegisterBaseServiceProviders
     */
    bootstrap(): Promise<void>;
}
