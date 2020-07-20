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
exports.RegisterBaseServiceProviders = void 0;
const ioc_1 = require("../../ioc");
const services_1 = require("../../services");
/**
 * @export
 * @class RegisterBaseServiceProviders
 * @implements {Bootstrapper}
 */
let RegisterBaseServiceProviders = class RegisterBaseServiceProviders {
    /**
     * @param {Kernel.Application} app
     * @returns {Promise<void>}
     * @memberof RegisterBaseServiceProviders
     */
    async bootstrap() {
        await this.app.resolve(services_1.Log.ServiceProvider).register();
        await this.app.resolve(services_1.Triggers.ServiceProvider).register();
        await this.app.resolve(services_1.Filesystem.ServiceProvider).register();
        await this.app.resolve(services_1.Cache.ServiceProvider).register();
        await this.app.resolve(services_1.Pipeline.ServiceProvider).register();
        await this.app.resolve(services_1.Queue.ServiceProvider).register();
        await this.app.resolve(services_1.ProcessActions.ServiceProvider).register();
        await this.app.resolve(services_1.Validation.ServiceProvider).register();
        await this.app.resolve(services_1.Schedule.ServiceProvider).register();
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], RegisterBaseServiceProviders.prototype, "app", void 0);
RegisterBaseServiceProviders = __decorate([
    ioc_1.injectable()
], RegisterBaseServiceProviders);
exports.RegisterBaseServiceProviders = RegisterBaseServiceProviders;
//# sourceMappingURL=register-base-service-providers.js.map