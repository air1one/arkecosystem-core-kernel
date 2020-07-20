import { CacheStore } from "../../contracts/kernel";
import { ClassManager } from "../../support/class-manager";
/**
 * @export
 * @class CacheManager
 * @extends {ClassManager}
 */
export declare class CacheManager extends ClassManager {
    /**
     * Create an instance of the Memory driver.
     *
     * @protected
     * @returns {Promise<Logger>}
     * @memberof CacheManager
     */
    protected createMemoryDriver<K, T>(): Promise<CacheStore<K, T>>;
    /**
     * Get the default driver name.
     *
     * @protected
     * @returns {string}
     * @memberof ValidationManager
     */
    protected getDefaultDriver(): string;
}
