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
exports.ChangeServiceProviderState = void 0;
const enums_1 = require("../../enums");
const ioc_1 = require("../../ioc");
const providers_1 = require("../../providers");
/**
 * @class Disconnect
 * @implements {EventListener}
 */
let ChangeServiceProviderState = class ChangeServiceProviderState {
    /**
     * @param {string} name
     * @param {ServiceProvider} serviceProvider
     * @returns {this}
     * @memberof ChangeServiceProviderState
     */
    initialize(name, serviceProvider) {
        this.name = name;
        this.serviceProvider = serviceProvider;
        return this;
    }
    /**
     * @param {*} {name,data}
     * @returns {Promise<void>}
     * @memberof ChangeServiceProviderState
     */
    async handle({ name, data }) {
        if (name === enums_1.BlockEvent.Applied) {
            return this.changeState();
        }
        if (name === enums_1.KernelEvent.ServiceProviderBooted && data.name !== this.name) {
            return this.changeState(data.name);
        }
    }
    /**
     * @private
     * @param {string} [previous]
     * @returns {Promise<void>}
     * @memberof BootServiceProviders
     */
    async changeState(previous) {
        if (this.serviceProviders.failed(this.name)) {
            return;
        }
        if (this.serviceProviders.loaded(this.name) && (await this.serviceProvider.disposeWhen(previous))) {
            await this.serviceProviders.dispose(this.name);
        }
        if (this.serviceProviders.deferred(this.name) && (await this.serviceProvider.bootWhen(previous))) {
            await this.serviceProviders.boot(this.name);
        }
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ServiceProviderRepository),
    __metadata("design:type", providers_1.ServiceProviderRepository)
], ChangeServiceProviderState.prototype, "serviceProviders", void 0);
ChangeServiceProviderState = __decorate([
    ioc_1.injectable()
], ChangeServiceProviderState);
exports.ChangeServiceProviderState = ChangeServiceProviderState;
//# sourceMappingURL=listeners.js.map