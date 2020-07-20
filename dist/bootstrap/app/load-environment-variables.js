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
exports.LoadEnvironmentVariables = void 0;
const ioc_1 = require("../../ioc");
/**
 * @export
 * @class LoadEnvironmentVariables
 * @implements {Bootstrapper}
 */
let LoadEnvironmentVariables = class LoadEnvironmentVariables {
    /**
     * @returns {Promise<void>}
     * @memberof LoadEnvironmentVariables
     */
    async bootstrap() {
        const configRepository = this.app.get(ioc_1.Identifiers.ConfigRepository);
        await this.app
            .get(ioc_1.Identifiers.ConfigManager)
            .driver(configRepository.get("configLoader", "local"))
            .loadEnvironmentVariables();
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], LoadEnvironmentVariables.prototype, "app", void 0);
LoadEnvironmentVariables = __decorate([
    ioc_1.injectable()
], LoadEnvironmentVariables);
exports.LoadEnvironmentVariables = LoadEnvironmentVariables;
//# sourceMappingURL=load-environment-variables.js.map