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
exports.RegisterBaseConfiguration = void 0;
const ioc_1 = require("../../ioc");
const config_1 = require("../../services/config");
/**
 * @export
 * @class RegisterBaseConfiguration
 * @extends {AbstractBootstrapper}
 */
let RegisterBaseConfiguration = class RegisterBaseConfiguration {
    /**
     * @param {Kernel.Application} app
     * @returns {Promise<void>}
     * @memberof RegisterBaseConfiguration
     */
    async bootstrap() {
        this.app.bind(ioc_1.Identifiers.ConfigManager).to(config_1.ConfigManager).inSingletonScope();
        await this.app.get(ioc_1.Identifiers.ConfigManager).boot();
        this.configRepository.set("app.flags", this.app.get(ioc_1.Identifiers.ConfigFlags));
        // @todo: better name for storing pluginOptions
        this.configRepository.set("app.pluginOptions", this.app.get(ioc_1.Identifiers.ConfigPlugins));
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], RegisterBaseConfiguration.prototype, "app", void 0);
__decorate([
    ioc_1.inject(ioc_1.Identifiers.ConfigRepository),
    __metadata("design:type", config_1.ConfigRepository)
], RegisterBaseConfiguration.prototype, "configRepository", void 0);
RegisterBaseConfiguration = __decorate([
    ioc_1.injectable()
], RegisterBaseConfiguration);
exports.RegisterBaseConfiguration = RegisterBaseConfiguration;
//# sourceMappingURL=register-base-configuration.js.map