"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootServiceProviders = void 0;
const __1 = require("../..");
// @ts-ignore
const enums_1 = require("../../enums");
const plugins_1 = require("../../exceptions/plugins");
const ioc_1 = require("../../ioc");
// @ts-ignore
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const listeners_1 = require("./listeners");
// todo: review the implementation
/**
 * @export
 * @class RegisterProviders
 * @implements {Bootstrapper}
 */
let BootServiceProviders = class BootServiceProviders {
    /**
     * @returns {Promise<void>}
     * @memberof RegisterProviders
     */
    async bootstrap() {
        for (const [name, serviceProvider] of this.serviceProviders.all()) {
            const serviceProviderName = serviceProvider.name();
            utils_1.assert.defined(serviceProviderName);
            if (await serviceProvider.bootWhen()) {
                try {
                    await this.serviceProviders.boot(name);
                }
                catch (error) {
                    this.logger.error(error.stack);
                    const isRequired = await serviceProvider.required();
                    if (isRequired) {
                        throw new plugins_1.ServiceProviderCannotBeBooted(serviceProviderName, error.message);
                    }
                    this.serviceProviders.fail(serviceProviderName);
                }
            }
            else {
                this.serviceProviders.defer(name);
            }
            const eventListener = this.app
                .resolve(listeners_1.ChangeServiceProviderState)
                .initialize(serviceProviderName, serviceProvider);
            // Register the "enable/disposeWhen" listeners to be triggered on every block. Use with care!
            this.events.listen(enums_1.BlockEvent.Applied, eventListener);
            // We only want to trigger this if another service provider has been booted to avoid an infinite loop.
            this.events.listen(enums_1.KernelEvent.ServiceProviderBooted, eventListener);
        }
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], BootServiceProviders.prototype, "app", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ServiceProviderRepository),
    __metadata("design:type", providers_1.ServiceProviderRepository)
], BootServiceProviders.prototype, "serviceProviders", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.EventDispatcherService),
    __metadata("design:type", Object)
], BootServiceProviders.prototype, "events", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.LogService),
    __metadata("design:type", Object)
], BootServiceProviders.prototype, "logger", void 0);
BootServiceProviders = __decorate([
    ioc_1.injectable()
], BootServiceProviders);
exports.BootServiceProviders = BootServiceProviders;
//# sourceMappingURL=boot-service-providers.js.map