import { EventListener } from "../../contracts/kernel";
import { ServiceProvider } from "../../providers";
/**
 * @class Disconnect
 * @implements {EventListener}
 */
export declare class ChangeServiceProviderState implements EventListener {
    /**
     * @private
     * @type {ServiceProviderRepository}
     * @memberof BootServiceProviders
     */
    private readonly serviceProviders;
    /**
     * @private
     * @type {string}
     * @memberof ChangeServiceProviderState
     */
    private name;
    /**
     * @private
     * @type {ServiceProvider}
     * @memberof ChangeServiceProviderState
     */
    private serviceProvider;
    /**
     * @param {string} name
     * @param {ServiceProvider} serviceProvider
     * @returns {this}
     * @memberof ChangeServiceProviderState
     */
    initialize(name: string, serviceProvider: ServiceProvider): this;
    /**
     * @param {*} {name,data}
     * @returns {Promise<void>}
     * @memberof ChangeServiceProviderState
     */
    handle({ name, data }: {
        name: any;
        data: any;
    }): Promise<void>;
    /**
     * @private
     * @param {string} [previous]
     * @returns {Promise<void>}
     * @memberof BootServiceProviders
     */
    private changeState;
}
