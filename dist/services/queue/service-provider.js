"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvider = void 0;
const ioc_1 = require("../../ioc");
const providers_1 = require("../../providers");
const manager_1 = require("./manager");
class ServiceProvider extends providers_1.ServiceProvider {
    /**
     * Register the service provider.
     *
     * @returns {Promise<void>}
     * @memberof ServiceProvider
     */
    async register() {
        this.app.bind(ioc_1.Identifiers.QueueManager).to(manager_1.QueueManager).inSingletonScope();
        this.app
            .bind(ioc_1.Identifiers.QueueFactory)
            .toFactory((context) => async (name) => context.container.get(ioc_1.Identifiers.QueueManager).driver(name));
    }
}
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=service-provider.js.map