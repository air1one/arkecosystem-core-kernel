import { Queue } from "../../contracts/kernel/queue";
import { ClassManager } from "../../support/class-manager";
/**
 * @export
 * @class QueueManager
 * @extends {ClassManager}
 */
export declare class QueueManager extends ClassManager {
    /**
     * Create an instance of the Memory driver.
     *
     * @protected
     * @returns {Promise<Logger>}
     * @memberof QueueManager
     */
    protected createMemoryDriver(): Promise<Queue>;
    /**
     * Get the default driver name.
     *
     * @protected
     * @returns {string}
     * @memberof ValidationManager
     */
    protected getDefaultDriver(): string;
}
