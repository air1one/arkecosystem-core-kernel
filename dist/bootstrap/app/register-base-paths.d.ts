import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class RegisterBasePaths
 * @implements {Bootstrapper}
 */
export declare class RegisterBasePaths implements Bootstrapper {
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
     * @type {ConfigRepository}
     * @memberof RegisterBasePaths
     */
    private readonly configRepository;
    /**
     * @returns {Promise<void>}
     * @memberof RegisterBasePaths
     */
    bootstrap(): Promise<void>;
}
