"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvider = void 0;
const ioc_1 = require("../../ioc");
const providers_1 = require("../../providers");
const schedule_1 = require("./schedule");
/**
 * @export
 * @class ServiceProvider
 * @extends {ServiceProvider}
 */
class ServiceProvider extends providers_1.ServiceProvider {
    /**
     * @returns {Promise<void>}
     * @memberof ServiceProvider
     */
    async register() {
        this.app.bind(ioc_1.Identifiers.ScheduleService).to(schedule_1.Schedule).inSingletonScope();
    }
}
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=service-provider.js.map