import { Bootstrapper } from "../interfaces";
/**
 * @export
 * @class RegisterProviders
 * @implements {Bootstrapper}
 */
export declare class BootServiceProviders implements Bootstrapper {
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
     * @type {ServiceProviderRepository}
     * @memberof BootServiceProviders
     */
    private readonly serviceProviders;
    /**
     * @private
     * @type {Contracts.Kernel.EventDispatcher}
     * @memberof BootServiceProviders
     */
    private readonly events;
    /**
     * @private
     * @type {Contracts.Kernel.Logger}
     * @memberof BootServiceProviders
     */
    private readonly logger;
    /**
     * @returns {Promise<void>}
     * @memberof RegisterProviders
     */
    bootstrap(): Promise<void>;
}
