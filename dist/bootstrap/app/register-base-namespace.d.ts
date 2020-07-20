import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class RegisterBaseNamespace
 * @implements {Bootstrapper}
 */
export declare class RegisterBaseNamespace implements Bootstrapper {
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
     * @memberof RegisterBaseNamespace
     */
    bootstrap(): Promise<void>;
}
