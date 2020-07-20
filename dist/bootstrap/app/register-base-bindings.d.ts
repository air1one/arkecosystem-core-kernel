import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class RegisterBaseBindings
 * @implements {Bootstrapper}
 */
export declare class RegisterBaseBindings implements Bootstrapper {
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
     * @memberof RegisterBaseBindings
     */
    bootstrap(): Promise<void>;
}
