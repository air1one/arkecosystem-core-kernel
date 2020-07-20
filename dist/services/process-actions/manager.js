"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessActionsManager = void 0;
const instance_manager_1 = require("../../support/instance-manager");
const pm2_1 = require("./drivers/pm2");
/**
 * @export
 * @class RemoteActionManager
 * @extends {InstanceManager<ProcessActionsService>}
 */
class ProcessActionsManager extends instance_manager_1.InstanceManager {
    createPm2Driver() {
        return this.app.resolve(pm2_1.Pm2ProcessActionsService);
    }
    getDefaultDriver() {
        return "pm2";
    }
}
exports.ProcessActionsManager = ProcessActionsManager;
//# sourceMappingURL=manager.js.map