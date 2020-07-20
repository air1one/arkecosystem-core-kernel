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
exports.LoadConfiguration = void 0;
const ioc_1 = require("../../ioc");
/**
 * @export
 * @class LoadConfiguration
 * @implements {Bootstrapper}
 */
let LoadConfiguration = class LoadConfiguration {
    /**
     * @returns {Promise<void>}
     * @memberof LoadConfiguration
     */
    async bootstrap() {
        await this.app
            .get(ioc_1.Identifiers.ConfigManager)
            .driver(this.app.get(ioc_1.Identifiers.ConfigRepository).get("configLoader", "local"))
            .loadConfiguration();
    }
};
__decorate([
    ioc_1.inject(ioc_1.Identifiers.Application),
    __metadata("design:type", Object)
], LoadConfiguration.prototype, "app", void 0);
LoadConfiguration = __decorate([
    ioc_1.injectable()
], LoadConfiguration);
exports.LoadConfiguration = LoadConfiguration;
//# sourceMappingURL=load-configuration.js.map