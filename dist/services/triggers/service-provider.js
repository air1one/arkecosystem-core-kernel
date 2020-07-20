"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvider = void 0;
const ioc_1 = require("../../ioc");
const providers_1 = require("../../providers");
const triggers_1 = require("./triggers");
class ServiceProvider extends providers_1.ServiceProvider {
    /**
     * Register the service provider.
     *
     * @returns {Promise<void>}
     * @memberof ServiceProvider
     */
    async register() {
        this.app.bind(ioc_1.Identifiers.TriggerService).to(triggers_1.Triggers).inSingletonScope();
    }
}
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=service-provider.js.map