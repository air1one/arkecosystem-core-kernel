import { Filesystem } from "../../contracts/kernel/filesystem";
import { InstanceManager } from "../../support/instance-manager";
/**
 * @export
 * @class FilesystemManager
 * @extends {Manager<Filesystem>}
 */
export declare class FilesystemManager extends InstanceManager<Filesystem> {
    /**
     * Create an instance of the Local driver.
     *
     * @protected
     * @returns {Promise<Filesystem>}
     * @memberof FilesystemManager
     */
    protected createLocalDriver(): Promise<Filesystem>;
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof FilesystemManager
     */
    protected getDefaultDriver(): string;
}
