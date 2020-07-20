"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesystemManager = void 0;
const instance_manager_1 = require("../../support/instance-manager");
const local_1 = require("./drivers/local");
/**
 * @export
 * @class FilesystemManager
 * @extends {Manager<Filesystem>}
 */
class FilesystemManager extends instance_manager_1.InstanceManager {
    /**
     * Create an instance of the Local driver.
     *
     * @protected
     * @returns {Promise<Filesystem>}
     * @memberof FilesystemManager
     */
    async createLocalDriver() {
        return this.app.resolve(local_1.LocalFilesystem).make();
    }
    /**
     * Get the default log driver name.
     *
     * @protected
     * @returns {string}
     * @memberof FilesystemManager
     */
    getDefaultDriver() {
        return "local";
    }
}
exports.FilesystemManager = FilesystemManager;
//# sourceMappingURL=manager.js.map