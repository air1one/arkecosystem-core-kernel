import { EventDispatcher } from "../../contracts/kernel/events";
import { InstanceManager } from "../../support/instance-manager";
/**
 * @export
 * @class EventDispatcherManager
 * @extends {Manager<EventDispatcher>}
 */
export declare class EventDispatcherManager extends InstanceManager<EventDispatcher> {
    /**
     * Create an instance of the Memory driver.
     *
     * @protected
     * @returns {Promise<EventDispatcher>}
     * @memberof EventDispatcherManager
     */
    protected createMemoryDriver(): Promise<EventDispatcher>;
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof EventDispatcherManager
     */
    protected getDefaultDriver(): string;
}
